import * as _ from 'lodash';
import {switches} from './globals';

export interface EnumType<T> { [key: number]: string; };

export interface EnumOptions {
  doNumericChecks?: boolean;
  useZeroDefault?: boolean,
  throwForBadNumericCheck?: boolean,
  jsStringPrefix?: string;
  jsStringPostfix?: string;
  jsStringTransform?: (string) => string;
  displayNameTransform?: (string) => string;
  displayStringTransform?: (string) => string;
  inverseStringTransform?: (string) => string;
}

var defaultEnumOptions: EnumOptions = {
  doNumericChecks: switches.get('isDevMode'),
  useZeroDefault: true,
  throwForBadNumericCheck: false,
  jsStringTransform: _.camelCase,
  jsStringPrefix: "",
  jsStringPostfix: "",
  displayNameTransform: _.startCase,
  displayStringTransform: _.startCase,
  inverseStringTransform: null
};

export class EnumMetadata<T> {
  config: EnumOptions;

  constructor(public enumeration: EnumType<T>, public name: string, options?: EnumOptions) {
    this.config = options ? _.merge({}, defaultEnumOptions, options) : defaultEnumOptions;

    if (this.config.useZeroDefault && !_.isString(enumeration[0]))
      this.config.useZeroDefault = false;
  }

  get displayName(): string {
    return _.isFunction(this.config.displayNameTransform) ?
      this.config.displayNameTransform(this.name) : this.name;
  }

  getValue(enumValueOrString: T | string, doInverseTransform = false): T {
    let str = _.isString(enumValueOrString) ? <string>enumValueOrString : "";

    if (str && doInverseTransform)
      str = this._transformStringInverse(str);
    else if (this.config.doNumericChecks && _.isNumber(enumValueOrString))
      str = this.enumeration[<any>enumValueOrString];

    let val: any = str ? this.enumeration[str] : enumValueOrString;

    if (this.config.doNumericChecks && !_.isNumber(val)) {
      if (this.config.useZeroDefault)
        val = 0;
      else if (this.config.throwForBadNumericCheck)
        throw new Error('Enumeration value or string is not valid.')
      else
        val = null;
    };

    return <T>val;
  }

  getJSString(enumValue: T): string {
    let str = this._getStringForEnumValue(enumValue);

    if (_.isFunction(this.config.jsStringTransform))
      str = this.config.jsStringTransform(str);
    if (_.isString(this.config.jsStringPrefix))
      str = this.config.jsStringPrefix + str;
    if (_.isString(this.config.jsStringPostfix))
      str = str + this.config.jsStringPostfix;

    return  str;
  }

  getDisplayString(enumValue: T): string {
    let str = this._getStringForEnumValue(enumValue);

    if (_.isFunction(this.config.displayStringTransform))
      str = this.config.displayStringTransform(str);

    return  str;
  }

  wrapper(): EnumValueWrapper<T> {
    return new EnumValueWrapper(this);
  }

  wrap(options: EnumOptions)
  wrap(enumValueOrString: T | string)
  wrap(options: EnumOptions, enumValueOrString: T | string)
  wrap(ptionsOrEnumValueOrString: EnumOptions | T | string, enumValueOrString?: T | string) {
    return new EnumValueWrapper(this, ptionsOrEnumValueOrString, enumValueOrString);
  }

  getValues(): Array<T> {
    return _.valuesIn(this.enumeration).filter(_.isNumber) as Array<T>;
  }

  private _getStringForEnumValue(enumValue: T): string {
    let str = this.enumeration[<any>enumValue];

    if (!_.isString(str) && this.config.useZeroDefault)
      str = this.enumeration[0];

    if (!str) throw new Error('Enumeration value is not valid.')

    return str;
  }

  private _transformStringInverse(str: string): string {
    str = _.isString(str) ? str : "";

    if (_.isString(this.config.jsStringPrefix) && this.config.jsStringPrefix.length &&
      str.startsWith(this.config.jsStringPrefix))
      str = str.slice(this.config.jsStringPrefix.length);
    if (_.isString(this.config.jsStringPostfix) && this.config.jsStringPostfix.length &&
      str.startsWith(this.config.jsStringPostfix))
      str = str.slice(this.config.jsStringPostfix.length);

    if (_.isFunction(this.config.inverseStringTransform))
      str = this.config.inverseStringTransform(str);

    str.replace(" ", "");

    return str;
  }
}

export class EnumValueWrapper<T> {
  private _metadata: EnumMetadata<T>;
  private _enumValue: T;

  constructor(metadata: EnumMetadata<T>)
  constructor(metadata: EnumMetadata<T>, options: EnumOptions)
  constructor(metadata: EnumMetadata<T>, enumValueOrString: T | string)
  constructor(metadata: EnumMetadata<T>, options: EnumOptions, enumValueOrString: T | string)
  constructor(metadata: EnumMetadata<T>,
    optionsOrEnumValueOrString?: EnumOptions | T | string, enumValueOrString?: T | string) {
    this._metadata = _.isObject(optionsOrEnumValueOrString) ?
      <EnumMetadata<T>>_.merge({}, metadata, { config: optionsOrEnumValueOrString }) : metadata;
    this.set(_.isNumber(optionsOrEnumValueOrString) || _.isString(optionsOrEnumValueOrString) ?
      <T | string>optionsOrEnumValueOrString : enumValueOrString || null);
  }

  get hasValue(): boolean {
    return _.isNumber(this._enumValue) &&
      !(<number><any>this._enumValue === 0 && this._metadata.config.useZeroDefault);
  }

  get value(): T {
    return this._enumValue;
  }

  get jsString(): string {
    return this._metadata.getJSString(this._enumValue);
  }

  get displayString(): string {
    return this._metadata.getDisplayString(this._enumValue);
  }

  set(enumValueOrString?: T | string): void {
    this._enumValue = this._metadata.getValue(enumValueOrString);
  }
}

export class Enum {
  static metadataMap = new WeakMap<EnumType<any>, EnumMetadata<any>>();

  static register<T>(
    enumeration: EnumType<T>, name: string, options?: EnumOptions) {
    this.metadataMap.set(enumeration, new EnumMetadata(enumeration, name, options));
  }

  static unregister<T>(enumeration: EnumType<T>) {
    this.metadataMap.delete(enumeration);
  }

  static hasMetadata<T>(enumeration: EnumType<T>): boolean {
    return this.metadataMap.has(enumeration);
  }

  static getMetadata<T>(enumeration: EnumType<T>): EnumMetadata<T> {
    return <EnumMetadata<T>>this.metadataMap.get(enumeration);
  }

  static getdisplayName<T>(enumeration: EnumType<T>): string {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.displayName : null;
  }

  static getValue<T>(enumeration: EnumType<T>,
    enumValueOrString: T | string, doInverseTransform = false): T {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.getValue(enumValueOrString, doInverseTransform) : null;
  }

  static getJSString<T>(enumeration: EnumType<T>, enumValue: T): string {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.getJSString(enumValue) : null;
  }

  static getDisplayString<T>(enumeration: EnumType<T>, enumValue: T): string {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.getDisplayString(enumValue) : null;
  }

  static wrapper<T>(enumeration: EnumType<T>): EnumValueWrapper<T> {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.wrapper() : null;
  }

  static wrap<T>(enumeration: EnumType<T>, options: EnumOptions)
  static wrap<T>(enumeration: EnumType<T>, enumValueOrString: T | string)
  static wrap<T>(enumeration: EnumType<T>, options: EnumOptions, enumValueOrString: T | string)
  static wrap<T>(enumeration: EnumType<T>, optionsOrEnumValueOrString : EnumOptions | T | string,
    enumValueOrString?: T | string) {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.wrap(optionsOrEnumValueOrString, enumValueOrString) : null;
  }

 static getValues<T>(enumeration: EnumType<T>): Array<T> {
    const metadata = this.getMetadata(enumeration);
    return metadata ? metadata.getValues() : null;
  }
}
