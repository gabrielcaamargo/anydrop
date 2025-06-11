import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
	const insets = useSafeAreaInsets();

	return insets;
}
