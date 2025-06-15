if (__DEV__) {
	require('./ReactotronConfig');
}

import {useInitializeAuth} from '@domain';
import {useAppTheme, useInitializeSdk} from '@hooks';
import {Routes} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {StatusBar} from 'react-native';
import {initializeStorage, MMKVStorage} from '@storage';

export default function App() {
	const {backgroundColor} = useAppTheme();

	useInitializeSdk();
	useInitializeAuth();

	initializeStorage(MMKVStorage);

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
			<Routes />
		</ThemeProvider>
	);
}
