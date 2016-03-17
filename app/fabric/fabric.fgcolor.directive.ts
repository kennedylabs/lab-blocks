import {Directive, ElementRef, Renderer} from 'angular2/core';
import {EnumClassToggleBase} from './fabric.enumclasstoogglebase.directive';
import {Enum} from '../utility/enum'
import {Color} from './fabric.color.enum'

@Directive({
  inputs: ['uf-fg-color: value']
})
export class fgColor extends EnumClassToggleBase<Color>  {
  constructor(_ngEl: ElementRef, _renderer: Renderer) {
    super(_ngEl, _renderer);
    this._enumValueWrapper = Enum.wrapper<Color>(Color);
  }
}
