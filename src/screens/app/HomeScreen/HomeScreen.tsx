import {Text, View} from 'react-native';
import {Icon} from '@components';
import {env} from '@config';

export function HomeScreen() {
	console.log('HomeScreennn', env.googleWebClientId);

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>HomeScreen</Text>

			<Icon name="Camera" color="yellowMain" />
		</View>
	);
}
