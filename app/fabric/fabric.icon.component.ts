import { Component, Input } from 'angular2/core';
import { NgIf, NgClass } from 'angular2/common';
import { FabricComponent } from './fabric.component';
import { Enum, IconType } from './fabric.enums';

@Component({
  selector: 'ms-icon',
  template: '<i *ng -if="iconType" class="ms-icon"[ngClass] = "cssClasses"></i>',
  directives: [NgIf, NgClass]
})
export class Icon extends FabricComponent {
  private _iconType = Enum.wrapper<IconType>(IconType, this.cssClasses);

  @Input()
  get iconType(): IconType | string {
    return this._iconType.value;
  }set iconType(value: IconType | string) {
    this._iconType.set(value);
  }
}
