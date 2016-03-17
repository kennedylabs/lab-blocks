import {ElementRef, Renderer} from 'angular2/core';
import {EnumValueWrapper} from '../utility/enum'

export var foo = {};

export class EnumClassToggleBase<T> {
  protected _enumValueWrapper: EnumValueWrapper<T>;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  get value(): T {
    return this._enumValueWrapper.value;
  }
  set iconType(value: T | string) {
    if (this._enumValueWrapper.hasValue)
      this._renderer.setElementClass(this._elementRef.nativeElement,
        this._enumValueWrapper.jsString, false);
    this._enumValueWrapper.set(value);
    if (this._enumValueWrapper.hasValue)
      this._renderer.setElementClass(this._elementRef.nativeElement,
        this._enumValueWrapper.jsString, false);
  }
}
