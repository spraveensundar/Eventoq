/**
 * @format
 */
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import Toast from 'react-native-root-toast';

import store from './src/components/store';

const Root = () => (
    <RootSiblingParent>
        <Provider store={store}>
            <App />
            <Toast />
        </Provider>
    </RootSiblingParent>

);

AppRegistry.registerComponent(appName, () => Root);
