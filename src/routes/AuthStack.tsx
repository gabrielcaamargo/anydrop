import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SigninScreen} from '@screens';

export type AuthStackParamList = {
	SigninScreen: undefined;
};

export function AuthStack() {
	const Stack = createNativeStackNavigator<AuthStackParamList>();

	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="SigninScreen" component={SigninScreen} />
		</Stack.Navigator>
	);
}
