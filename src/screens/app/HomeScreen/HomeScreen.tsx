import {Text, View} from 'react-native';
import {Icon} from '@components';

export function HomeScreen() {
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>HomeScreen</Text>

			<Icon name="Camera" color="yellowMain" />
		</View>
	);
}
