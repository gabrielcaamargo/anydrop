import {Platform} from 'react-native';

export function useIsIOS(): boolean {
	return Platform.OS === 'ios';
}
