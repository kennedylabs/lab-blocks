import {Enum} from '../utility/enum'

Enum.register(FontSize, 'FontSize', {
  displayStringTransform: getDisplayString,
  inverseStringTransform: getInverseDisplayString
});

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
