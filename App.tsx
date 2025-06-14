if (__DEV__) {
	require('./ReactotronConfig');
}

import {useAppTheme} from '@hooks';
import {Routes} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {StatusBar} from 'react-native';

export default function App() {
	const {backgroundColor} = useAppTheme();

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
			<Routes />
		</ThemeProvider>
	);
}
