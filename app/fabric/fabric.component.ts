import {StringWrapper} from 'angular2/src/facade/lang';
import {Input} from 'angular2/core'
import {
  Enum,
  Color,
  FontSize,
  FontWeight,
  IconType,
  AnimationType
} from './fabric.enums'

export class FabricComponent {
  private _cssClasses = new Set<string>();
  private _backgroundColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-bgColor-' }, this._cssClasses);
  private _foregroundColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-fontColor-' }, this._cssClasses);
  private _borderColor = Enum.wrapper<Color>(Color,
    { jsStringPrefix: 'ms-borderColor-' }, this._cssClasses);
  private _baseClass = Enum.wrapper<FontSize>(FontSize,
    { jsStringPrefix: 'ms-baseClass-' }, this._cssClasses);
  private _fontSize = Enum.wrapper<FontSize>(FontSize, this._cssClasses);
  private _fontWeight = Enum.wrapper<FontWeight>(FontWeight, this._cssClasses);
  private _animationType = Enum.wrapper<AnimationType>(AnimationType, this.cssClasses);

  get cssClasses(): Set<string> {
    return this._cssClasses;
  }

  @Input()
  get backgroundColor(): Color | string {
    return this._backgroundColor.value;
  }
  set backgroundColor(value: Color | string) {
    this.cssClasses.delete(this._backgroundColor.jsString);
    this._backgroundColor.set(value);
    this.cssClasses.add(this._backgroundColor.jsString);
  }

  @Input()
  get foregroundColor(): Color | string {
    return this._foregroundColor.value;
  }
  set foregroundColor(value: Color | string) {
    this.cssClasses.delete(this._foregroundColor.jsString);
    this._foregroundColor.set(value);
    this.cssClasses.add(this._foregroundColor.jsString);
  }

  @Input()
  get borderColor(): Color | string {
    return this._borderColor.value;
  }
  set borderColor(value: Color | string) {
    this.cssClasses.delete(this._borderColor.jsString);
    this._borderColor.set(value);
    this.cssClasses.add(this._borderColor.jsString);
  }

  animate(animationType: AnimationType | string): void;
  animate(style: ('slide'), type: 'in' | 'out', direction?: 'right' | 'left' | 'up' | 'down',
    speed?: 'normal' | 'fast'): void;
  animate(style: ('scale'), type: 'in' | 'out', direction?: 'up' | 'down'): void;
  animate(style: ('fade'), type: 'in' | 'out', speed?: 'normal' | 'super' | 'fast' | 'slow'): void;
  animate(animationTypeOrStyle: AnimationType | string, maybeType?: string,
    maybeDirectionOrSpeed?: string, maybeSpeed?: string): void {

    if (maybeType) {
      const style = <string>animationTypeOrStyle;
      const type = maybeType;
      const direction = style !== 'fade' ? maybeDirectionOrSpeed : '';
      const speed = style !== 'fade' ? maybeSpeed : maybeDirectionOrSpeed;
      const numberPostfix = style === 'slide' && (direction === 'right' || direction === 'right')
        && speed === 'normal' ? '400' :
        style === 'slide' && (direction === 'right' || direction === 'right') ? '40' :
          style === 'slide' && speed === 'normal' ? '20' :
            style === 'slide' ? '10' :
              style === 'scale' && type === 'in' ? '100' :
                style === 'scale' && direction === 'up' ? '103' :
                  style === 'scale' ? '98' :
                    speed === 'normal' ? '400' :
                      speed === 'super' ? '100' :
                        speed === 'fast' ? '200' :
                          '500';
      const capitalize = (s: string) => StringWrapper.replaceAllMapped(. s.length ? s.charAt(0).toUpperCase() + s.substr(1) : '';
      animationTypeOrStyle = style + capitalize(type) + capitalize(direction) + numberPostfix);
    }

    this._animationType.set(animationTypeOrStyle);
  }
}
