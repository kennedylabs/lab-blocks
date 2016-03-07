import {Component, Input} from 'angular2/core';
import {NgClass, NgIf} from 'angular2/common';
import {isString, isBlank} from 'angular2/src/facade/lang';
import * as _ from 'lodash'
import {FabricIconType} from './fabric.icon.enum';

@Component({
  selector: 'fabric-icon',
  template: '<i *ng-if="iconName !== unspecified" [ngClass]="class="ms-Icon ms-Icon--{{iconName}}"></i>',
  directives: [NgClass, NgIf]
})

export class FabricIcon {
  @Input() fabricIconType: string | FabricIconType = "none";

  getClasses() {

  }

  getStaticClasses() {
    return "ms-icon";
  }
}
