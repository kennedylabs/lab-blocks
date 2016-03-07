import * as _ from 'lodash';
import {switches} from './globals';

export interface EnumType<T> {
  [key: number]: string;
};

declare type EnumValueOrString<T> = string | T;

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
  private config: EnumOptions;

  constructor(public enumeration: EnumType<T>, public name, options?: EnumOptions) {
    this.config = options ? _.merge({}, defaultEnumOptions, options) : defaultEnumOptions;

    if (this.config.useZeroDefault && !_.isString(enumeration[0]))
      this.config.useZeroDefault = false;
  }

  get displayName() {
    return _.isFunction(this.config.displayNameTransform) ?
      this.config.displayNameTransform(this.name) : this.name;
  }

  getValue(enumValueOrString: EnumValueOrString<T>, doInverseTransform = false): T {
    let str = _.isString(enumValueOrString) ? <string>enumValueOrString : "";

    if (str && doInverseTransform)
      str = this.transformStringInverse(str);
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
    let str = this.getStringForEnumValue(enumValue);

    if (_.isFunction(this.config.jsStringTransform))
      str = this.config.jsStringTransform(str);
    if (_.isString(this.config.jsStringPrefix))
      str = this.config.jsStringPrefix + str;
    if (_.isString(this.config.jsStringPostfix))
      str = str + this.config.jsStringPostfix;

    return  str;
  }

  getDisplayString(enumValue: T): string {
    let str = this.getStringForEnumValue(enumValue);

    if (_.isFunction(this.config.displayStringTransform))
      str = this.config.displayStringTransform(str);

    return  str;
  }

  wrap(enumValueOrString?: EnumValueOrString<T>): EnumValueWrapper<T> {
    return new EnumValueWrapper(this, enumValueOrString);
  }

  getValues(): Array<T> {
    return _.values<T>(this.enumeration).filter(_.isNumber);
  }

  private getStringForEnumValue(enumValue: T): string {
    let str = this.enumeration[<any>enumValue];

    if (!_.isString(str) && this.config.useZeroDefault)
      str = this.enumeration[0];

    if (!str) throw new Error('Enumeration value is not valid.')

    return str;
  }

  private transformStringInverse(str: string): string {
    str = _.isString(str) ? str : "";

    if (_.isString(this.config.jsStringPrefix) && this.config.jsStringPrefix.length &&
      str.startsWith(this.config.jsStringPrefix))
      str = str.slice(this.config.jsStringPrefix.length);
    if (_.isString(this.config.jsStringPostfix) && this.config.jsStringPostfix.length &&
      str.startsWith(this.config.jsStringPostfix))
      str = str.slice(this.config.jsStringPostfix.length);

    str.replace(" ", "");

    if (_.isFunction(this.config.inverseStringTransform))
      str = this.config.inverseStringTransform(str);

    return str;
  }
}

export class EnumValueWrapper<T> {
  private enumValue: T;

  constructor(private metadata: EnumMetadata<T>, enumValueOrString?: EnumValueOrString<T>) {
    this.set(enumValueOrString);
  }

  get value(): T {
    return this.metadata.getValue(this.enumValue);
  }

  get jsString(): string {
    return this.metadata.getJSString(this.enumValue);
  }

  get displayString(): string {
    return this.metadata.getDisplayString(this.enumValue);
  }

  set(enumValueOrString?: EnumValueOrString<T>): void {
    this.enumValue = this.metadata.getValue(enumValueOrString);
  }
}
