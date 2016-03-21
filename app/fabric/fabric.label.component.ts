import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { NgClass } from 'angular2/common';
import { FormComponent } from './fabric.formcomponent'
import { Enum, EnumValueWrapper, IconType } from './fabric.enums';

@Component({
  selector: 'uf-label',
  template: '<label [NgClass]="cssClasses"><ng-content></ng-content></label>',
  directives: [NgClass]
})
export class Label extends FormComponent { }
