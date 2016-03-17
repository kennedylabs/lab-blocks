import {OnDestroy, ElementRef, Renderer} from 'angular2/core';
import {EnumValueWrapper} from '../utility/enum'

export class EnumClassToggleBase<T> implements OnDestroy {
  private _enumValueWrapper: EnumValueWrapper<T>;

  constructor(private _ngEl: ElementRef, private _renderer: Renderer) { }

  ngOnDestroy(): void {
    const className = this._enumValueWrapper.jsString;
    if (className) this._renderer.setElementClass(this._ngEl.nativeElement, className, false);
  }

  protected setEnumValueOrString(newEnumValueOrString) {
    const previousClassName = this._enumValueWrapper.jsString;
    this._enumValueWrapper.set(newEnumValueOrString);
    const newClassName = this._enumValueWrapper.jsString;

    if (newClassName !== previousClassName) {
      if (previousClassName)
        this._renderer.setElementClass(this._ngEl.nativeElement, newClassName, true);
      if (newClassName)
        this._renderer.setElementClass(this._ngEl.nativeElement, previousClassName, false);
    }
  }
}

