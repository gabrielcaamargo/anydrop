if (__DEV__) {
	require('./ReactotronConfig');
}

import {useAuth, useInitializeAuth} from '@domain';
import {useAppTheme, useInitializeSdk} from '@hooks';
import {getAuth, onAuthStateChanged} from '@react-native-firebase/auth';
import {Routes} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';

export default function App() {
	const {backgroundColor} = useAppTheme();

	useInitializeSdk();
	useInitializeAuth();

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
			<Routes />
		</ThemeProvider>
	);
}
