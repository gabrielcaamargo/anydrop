import {Routes} from '@routes';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}
