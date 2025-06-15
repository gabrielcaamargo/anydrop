import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

import BootSplash from 'react-native-bootsplash';
import {useAuthCredentialsProvider} from '@domain';
import {AppStack} from './AppStack';
import {useEffect} from 'react';

export function Routes() {
	const {currentUser} = useAuthCredentialsProvider();

	return (
		<NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
			{currentUser ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
}
