import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';

import BootSplash from 'react-native-bootsplash';

export function Routes() {
	return (
		<NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
			<AuthStack />
		</NavigationContainer>
	);
}
