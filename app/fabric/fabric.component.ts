import {EnumMetadata} from '../utility/enum'

export enum AnimationType {
  slideRightIn40,
  slideLeftIn40,
  slideUpIn20,
  slideUpIn10,
  slideDownIn20,
  slideDownIn10,
  slideRightOut40,
  slideLeftOut40,
  slideUpOut20,
  slideUpOut10,
  slideDownOut20,
  slideDownOut10,
  scaleUpIn100,
  scaleDownIn100,
  scaleUpOut103,
  scaleDownOut98,
  fadeIn100,
  fadeIn200,
  fadeIn400,
  fadeIn500,
  fadeOut100,
  fadeOut200,
  fadeOut400,
  fadeOut500
}

export module Color{
  export var metadata = new EnumMetadata<AnimationType>(AnimationType, 'AnimationType');
  export var wrap = metadata.wrap;
}

export class FabricComponent {
  bgColor: Color;

  getClasses() {
    var classes = new Array<string>();
    return classes;
  }

  getStaticClasses(): string | Array<string> {
    return null;
  }

  addClass(className: string) {
  }
}
