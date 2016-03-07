import {isNumber, isBlank, isPresent, assertionsEnabled} from 'angular2/src/facade/lang';
import {applyMixins} from 'rxjs/util/applyMixins'
import * as _ from 'lodash';

export enum FontSize {
  unknown,
  su,
  xxl,
  xl,
  l,
  mPlus,
  m,
  sPlus,
  s,
  xs,
  mi
}

export enum AnimationType {
  slideRightIn40,
  slideLeftIn40,
  slideUpIn20,
  slideUpIn10,
  slideDownIn20,
  slideDownIn10,
  slideRightOut40,
  slideLeftOut40,
  slideUpOut20,
  slideUpOut10,
  slideDownOut20,
  slideDownOut10,
  scaleUpIn100,
  scaleDownIn100,
  scaleUpOut103,
  scaleDownOut98,
  fadeIn100,
  fadeIn200,
  fadeIn400,
  fadeIn500,
  fadeOut100,
  fadeOut200,
  fadeOut400,
  fadeOut500
}

export enum Color {
  themeDarker,
  themeDark,
  themeDarkAlt,
  themePrimary,
  themeSecondary,
  themeTertiary,
  themeLight,
  themeLighter,
  themeLighterAlt,
  black,
  neutralDark,
  neutralPrimary,
  neutralSecondary,
  neutralSecondaryAlt,
  neutralTertiary,
  neutralTertiaryAlt,
  neutralLight,
  neutralLighter,
  neutralLighterAlt,
  white,
  yellow,
  yellowLight,
  orange,
  orangeLight,
  orangeLighter,
  redDark,
  red,
  magentaLight,
  magenta,
  magentaDark,
  purpleLight,
  purple,
  purpleDark,
  blueLight,
  blueMid,
  blue,
  blueDark,
  tealLight,
  teal,
  tealDark,
  greenLight,
  green,
  greenDark,
  info,
  success,
  alert,
  error
}

export module Color{
  export var metadata = new EnumMetadata<Color>(Color);
  export var wrap = metadata.wrap;
}

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
  jsStringTransform?: (str?: string) => string;
  displayStringTransform?: (string) => string;
  inverseStringTransform?: (string) => string;
}

var defaultEnumOptions: EnumOptions = {
  doNumericChecks: assertionsEnabled(),
  useZeroDefault: true,
  throwForBadNumericCheck: false,
  jsStringTransform: _.camelCase,
  jsStringPrefix: "",
  jsStringPostfix: "",
  displayStringTransform: _.startCase,
  inverseStringTransform: null
};

export class EnumMetadata<T> {
  private config: EnumOptions;

  constructor(public enumeration: EnumType<T>, options?: EnumOptions) {
    this.config = options ? _.merge({}, defaultEnumOptions, options) : defaultEnumOptions;

    if (this.config.useZeroDefault && !_.isString(enumeration[0]))
      this.config.useZeroDefault = false;
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

  set(enumValueOrString?: EnumValueOrString<T>): void {
    this.enumValue = this.metadata.getValue(enumValueOrString);
  }

  getValue(): T {
    return this.metadata.getValue(this.enumValue);
  }

  getJSString(): string {
    return this.metadata.getJSString(this.enumValue);
  }

  getDisplayString(): string {
    return this.metadata.getDisplayString(this.enumValue);
  }
}

export class FabricComponent {
  bgColor: Color;

  getClasses() {
    var classes = new Array<string>();
    return classes;
  }

  getStaticClasses(): string | Array<string> {
    return null;
  }

  addClass(className: string) {
  }
}
