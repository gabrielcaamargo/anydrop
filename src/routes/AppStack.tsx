import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

export type AppStackParamList = {
	HomeScreen: undefined;
};

export function AppStack() {
	const Stack = createNativeStackNavigator<AppStackParamList>();

	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
}
