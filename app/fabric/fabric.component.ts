import {Enum} from '../utility/enum'
import {Color} from './fabric.color.enum'
import {AnimationType} from './fabric.animationtype.enum'

export class FabricComponent {
  private _bgColor = Enum.wrapper(Color);
  private _fgColor = Enum.wrapper(Color);
  private _borderColor = Enum.wrapper(Color);
  private _colorScheme = Enum.wrapper(Color);

  getClasses(): Enumerator<string> {
    var classes = new Array<string>();

    if ()

    return classes;
  }

  getStaticClasses(): string | Array<string> {
    return null;
  }

  addClass(className: string) {
  }
}
