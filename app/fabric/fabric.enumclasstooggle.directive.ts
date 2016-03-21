import { ElementRef, Renderer } from 'angular2/core';
import { EnumValueWrapper } from '../utility/enum'

export class EnumClassToggleBase<T> {
  protected _enumValueWrapper: EnumValueWrapper<T>;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  set(value: T | string) {
    const enumValue = this._enumValueWrapper.metadata.getValue(value);

    if (this._enumValueWrapper.value !== enumValue) {
      if (this._enumValueWrapper.hasValue)
        this._renderer.setElementClass(this._elementRef.nativeElement,
          this._enumValueWrapper.jsString, false);

      this._enumValueWrapper.set(enumValue);

      if (this._enumValueWrapper.hasValue)
        this._renderer.setElementClass(this._elementRef.nativeElement,
          this._enumValueWrapper.jsString, false);
    }
  }
}
