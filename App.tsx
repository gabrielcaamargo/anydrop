if (__DEV__) {
	require('./ReactotronConfig');
}

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

	function handleAuthStateChanged(user: any) {
		console.log({user});
	}

	useEffect(() => {
		const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
			<Routes />
		</ThemeProvider>
	);
}
