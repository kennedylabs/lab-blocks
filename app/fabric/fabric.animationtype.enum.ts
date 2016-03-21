import { Enum } from '../utility/enum'

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

Enum.register(AnimationStyle, "AnimationStyle", { useZeroDefault: false });

export enum AnimationStyle {
  Fade,
  Right,
  Left,
  Up,
  Down,
  Grow,
  Shrink,
  Dissapear
}

export class AnimationFactory {
  private static _metadata = Enum.getMetadata<AnimationType>(AnimationType);

  static in(style: AnimationStyle | string, isSlow: boolean = false): string {
    return this.get('In', style, isSlow);
  }

  static out(style: AnimationStyle | string, isSlow: boolean = false): string {
    return this.get('Out', style, isSlow);
  }

  static typed(animationTypeValueOrString: AnimationType | string): string {
    return this._metadata.getJSString(this._metadata.getValue(animationTypeValueOrString));
  }

  private static get(transitionDirection: 'In' | 'Out',
    style: AnimationStyle | string, isSlow: boolean): string {
    const styleString = typeof style === 'string' ? style : AnimationStyle[style];
    return this.typed(this.getTypePrefix(styleString) + transitionDirection +
      this.getSpeedSuffix(styleString, isSlow, transitionDirection));
  }

  private static getTypePrefix(style: string): string {
    return /Right|Left|Up|Down/.test(style) ? 'Slide' + style
      : style === 'Grow' ? 'ScaleUp'
        : style === 'Shrink' ? 'ScaleDown'
          : 'Fade';
  }

  private static getSpeedSuffix(style: string, isSlow: boolean,
    transitionDirection: 'In' | 'Out'): string {
    return /Right|Left/.test(style) ? (isSlow ? '40' : '400')
      : /Up|Down/.test(style) ? (isSlow ? '10' : '20')
        : /Grow|Shrink/.test(style) && transitionDirection === 'In' ? '100'
          : style === 'Grow' ? '103' : style === 'Shrink' ? '98'
            : style === 'Fade' ? (isSlow ? '500' : '400')
              : isSlow ? '200'
                : '100';
  }
}
