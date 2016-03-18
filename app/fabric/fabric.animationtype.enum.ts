import {Enum} from '../utility/enum'

Enum.register(AnimationType, "AnimationType", { jsStringPrefix: 'ms-u-' });

export enum AnimationType {
  Unspecified,
  SlideRightIn40,
  SlideLeftIn40,
  SlideRightIn400,
  SlideLeftIn400,
  SlideUpIn20,
  SlideUpIn10,
  SlideDownIn20,
  SlideDownIn10,
  SlideRightOut40,
  SlideLeftOut40,
  SlideRightOut400,
  SlideLeftOut400,
  SlideUpOut20,
  SlideUpOut10,
  SlideDownOut20,
  SlideDownOut10,
  ScaleUpIn100,
  ScaleDownIn100,
  ScaleUpOut103,
  ScaleDownOut98,
  FadeIn400,
  FadeIn100,
  FadeIn200,
  FadeIn500,
  FadeOut400,
  FadeOut100,
  FadeOut200,
  FadeOut500
}
