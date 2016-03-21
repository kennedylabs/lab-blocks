import { Enum } from '../utility/enum'

Enum.register(FontWeight, "FontWeight", { jsStringPrefix: 'ms-fontWeight-' });

export enum FontWeight {
  unspecified,
  light,
  semilight,
  regular,
  semiBold
}
