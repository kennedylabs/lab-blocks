import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {, NgClass} from 'angular2/common';
import {Enum, EnumValueWrapper} from '../utility/enum';
import {IconType} from './fabric.icontype.enum';

@Component({
  selector: 'uf-label',
  template: '',
  directives: [NgClass]
})
export class Label {
  private _iconClassName: string;
  private _onIconClassNameChanged = new EventEmitter<IconType>();
  private _enumValueWrapper: EnumValueWrapper<IconType> =
    Enum.wrapper<IconType>(IconType, { jsStringPrefix: 'ms-icon--' });

  @Input()
  get iconType(): IconType | string {
    return this._enumValueWrapper.value;
  }
  set iconType(value: IconType | string) {
    this._enumValueWrapper.set(value);
    this._iconClassName = this._enumValueWrapper.jsString;
    this._onIconClassNameChanged.emit(this._enumValueWrapper.value);
  }

  @Output()
  get onIconClassNameChanged(): EventEmitter<IconType> {
    return this._onIconClassNameChanged;
  }
}
