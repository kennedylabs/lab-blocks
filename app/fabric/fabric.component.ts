import {Input} from 'angular2/core'
import { Enum, Color, FontSize, FontWeight } from './fabric.enums'

export class FabricComponent {
  private _cssClasses = new Set<string>();
  private _backgroundColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-bgColor-' }, this._cssClasses);
  private _fontColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-fontColor-' }, this._cssClasses);
  private _borderColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-borderColor-' }, this._cssClasses);
  private _baseClass = Enum.wrapper<FontSize>(FontSize,
    { jsStringPrefix: 'ms-baseClass-' }, this._cssClasses);
  private _fontSize = Enum.wrapper<FontSize>(FontSize, this._cssClasses);
  private _fontWeight = Enum.wrapper<FontWeight>(FontWeight, this._cssClasses);

  get cssClasses(): Set<string> {
    return this._cssClasses;
  }

  @Input()
  get backgroundColor(): Color | string {
    return this._backgroundColor.value;
  }
  set backgroundColor(value: Color | string) {
    this._backgroundColor.set(value);
  }

  @Input()
  get fontColor(): Color | string {
    return this._fontColor.value;
  }
  set fontColor(value: Color | string) {
    this._fontColor.set(value);
  }

  @Input()
  get borderColor(): Color | string {
    return this._borderColor.value;
  }
  set borderColor(value: Color | string) {
    this._borderColor.set(value);
  }
}
