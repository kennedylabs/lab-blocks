import {Component, Input, Output} from 'angular2/core';
import {NgIf, NgClass} from 'angular2/common';
import {FabricComponent} from './fabric.component';
import {Enum, EnumValueWrapper, IconType} from './fabric.enums';

@Component({
  selector: 'ms-icon',
  template: '<i *ng-if="iconTypeValue !=== IconType.Unspecified" [ngClass]="cssClasses"></i>',
  directives: [NgIf, NgClass]
})
export class Icon extends FabricComponent {
  private _enumValueWrapper: EnumValueWrapper<IconType> =
    Enum.wrapper<IconType>(IconType, { jsStringPrefix: 'ms-icon--' }, this.cssClasses);

  constructor() {
    super();
    this.cssClasses.add('ms-icon');
  }

  @Input()
  set iconType(value: IconType | string) {
    this._enumValueWrapper.set(value);
  }

  get iconTypeValue(): IconType {
    return this._enumValueWrapper.value;
  }
}
