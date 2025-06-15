import {Text, View} from 'react-native';
import {Icon} from '@components';
import {Camera} from 'lucide-react-native';

export function HomeScreen() {
	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>HomeScreen</Text>

			<Icon name="Camera" color="yellowMain" />
		</View>
	);
}
