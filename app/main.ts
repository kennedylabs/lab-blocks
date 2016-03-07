import {bootstrap} from 'angular2/platform/browser'
import {assertionsEnabled} from 'angular2/src/facade/lang';
import {AppComponent} from './app.component'
import {switches} from './utility/globals'

switches.set('isDevMode', assertionsEnabled());

bootstrap(AppComponent);
