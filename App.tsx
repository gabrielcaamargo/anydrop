import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {Text, View} from 'react-native';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<View
				style={{
					flex: 1,
					backgroundColor: theme.colors.backgroundColor,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text style={{color: theme.colors.textPrimary}}>App.tsx</Text>
			</View>
		</ThemeProvider>
	);
}
