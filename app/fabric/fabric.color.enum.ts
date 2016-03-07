import {EnumMetadata} from '../utility/enum'

export enum Color {
  Unspecified,
  ThemeDarker,
  ThemeDark,
  ThemeDarkAlt,
  ThemePrimary,
  ThemeSecondary,
  ThemeTertiary,
  ThemeLight,
  ThemeLighter,
  ThemeLighterAlt,
  Black,
  NeutralDark,
  NeutralPrimary,
  NeutralSecondary,
  NeutralSecondaryAlt,
  NeutralTertiary,
  NeutralTertiaryAlt,
  NeutralLight,
  NeutralLighter,
  NeutralLighterAlt,
  White,
  Yellow,
  YellowLight,
  Orange,
  OrangeLight,
  OrangeLighter,
  RedDark,
  Red,
  MagentaLight,
  Magenta,
  MagentaDark,
  PurpleLight,
  Purple,
  PurpleDark,
  BlueLight,
  BlueMid,
  Blue,
  BlueDark,
  TealLight,
  Teal,
  TealDark,
  GreenLight,
  Green,
  GreenDark,
  Info,
  Success,
  Alert,
  Error
}

export module Color{
  export var metadata = new EnumMetadata<Color>(Color, 'Color');
  export var wrap = metadata.wrap;
}