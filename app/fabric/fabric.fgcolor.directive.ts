import { Directive, OnInit } from 'angular2/core';
import { EnumClassToggleBase } from './fabric.enumclasstoogglebase.directive';
import { Enum, Color } from './fabric.enums'

@Directive({
  selector: '[fgColor]',
  inputs: ['fgColor: value']
})
export class fgColor extends EnumClassToggleBase<Color> implements OnInit {
  ngOnInit(): void {
    this._enumValueWrapper = Enum.wrapper<Color>(Color, { jsStringPrefix: 'ms-fontColor-' });
  }
}
