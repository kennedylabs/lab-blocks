import { Input } from 'angular2/core';
import { FabricComponent } from './fabric.component';
import { StringToggle } from '../utility/bool';

export class FormComponent extends FabricComponent {
  private _isActive = new StringToggle(this.cssClasses, 'isActive');
  private _isRequired = new StringToggle(this.cssClasses, 'isRequired');

  @Input()
  get isActive(): boolean {
    return this._isActive.value;
  }
  set isActive(value: boolean) {
    this._isActive.value = value;
  }

  @Input()
  get isRequired(): boolean {
    return this._isRequired.value;
  }
  set isRequired(value: boolean) {
    this._isRequired.value = value;
  }
}
