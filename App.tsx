if (__DEV__) {
	require('./ReactotronConfig');
}

import {useAppTheme, useInitializeSdk} from '@hooks';
import {Routes} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {StatusBar} from 'react-native';
import {initializeStorage, MMKVStorage} from '@storage';
import {AuthCredentialsProvider} from '@domain';

export default function App() {
	const {backgroundColor} = useAppTheme();

	useInitializeSdk();

	initializeStorage(MMKVStorage);

	return (
		<AuthCredentialsProvider>
			<ThemeProvider theme={theme}>
				<StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
				<Routes />
			</ThemeProvider>
		</AuthCredentialsProvider>
	);
}
