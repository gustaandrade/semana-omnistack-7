/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

App.get('*', function (_, res) { res.sendFile(indexPath) });
// FOR THE LINE ABOVE, SEE: https://stackoverflow.com/questions/46416248/cannot-get-error-404-on-reload

AppRegistry.registerComponent(appName, () => App);
