import {EnumMetadata} from '../utility/enum'

export enum AnimationType {
  Unspecified,
  SlideRightIn40,
  SlideLeftIn40,
  SlideUpIn20,
  SlideUpIn10,
  SlideDownIn20,
  SlideDownIn10,
  SlideRightOut40,
  SlideLeftOut40,
  SlideUpOut20,
  SlideUpOut10,
  SlideDownOut20,
  SlideDownOut10,
  ScaleUpIn100,
  ScaleDownIn100,
  ScaleUpOut103,
  ScaleDownOut98,
  FadeIn100,
  FadeIn200,
  FadeIn400,
  FadeIn500,
  FadeOut100,
  FadeOut200,
  FadeOut400,
  FadeOut500
}

export module AnimationType {
  export var metadata = new EnumMetadata<AnimationType>(AnimationType, 'AnimationType');
  export var wrap = metadata.wrap;
}
