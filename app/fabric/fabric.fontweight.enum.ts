import {EnumMetadata} from '../utility/enum'

export enum FontWeight {
  unspecified,
  light,
  semilight,
  regular,
  semiBold
}

export module Color{
  export var metadata = new EnumMetadata<FontWeight>(FontWeight, 'FontWeight');
  export var wrap = metadata.wrap;
}
