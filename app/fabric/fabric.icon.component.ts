import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgIf, NgClass} from 'angular2/common';
import {Enum, EnumValueWrapper} from '../utility/enum';
import {IconType} from './fabric.icontype.enum';

@Component({
  selector: 'uf-icon',
  template: '<i *ng-if="iconClassName" [ngClass]="setClassNames()"></i>',
  directives: [NgClass, NgIf]
})
export class Icon {
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
  public get onIconClassNameChanged(): EventEmitter<IconType> {
    return this._onIconClassNameChanged;
  }

  private setClassNames(): string[] {
    return this._iconClassName ? ['ms-icon', this._iconClassName] : [];
  }
}
