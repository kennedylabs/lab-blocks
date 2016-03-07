import {EnumMetadata} from '../utility/enum'
import * as _ from 'lodash'

export enum FontSize {
  Unknown,
  SU,
  XXL,
  XL,
  L,
  MPlus,
  M,
  SPlus,
  S,
  XS,
  MI
}

export module FontSize {
  export var metadata = new EnumMetadata<FontSize>(FontSize, 'FontSize', {
    displayStringTransform: getDisplayString,
    inverseStringTransform: getInverseDisplayString
  });
  export var wrap = metadata.wrap;

  function getDisplayString(str: string) {
    return _.startCase(str
      .replace('MI', 'Miniature')
      .replace('S', 'Small')
      .replace('M', 'Medium')
      .replace('L', 'Large')
      .replace('X', 'Extra')
      .replace('SU', 'Supersized'));
  }

  function getInverseDisplayString(str: string) {
    return _.startCase(str
      .replace('Miniature', 'MI')
      .replace('Small', 'S')
      .replace('Medium', 'M')
      .replace('Large', 'L')
      .replace('Extra', 'X')
      .replace('Supersized', 'SU'));
  }
}
