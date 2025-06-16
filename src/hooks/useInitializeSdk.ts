import {env} from '@config';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

export function useInitializeSdk() {
	async function initializeGoogleSdk() {
		GoogleSignin.configure({
			webClientId: env.googleWebClientId,
		});
	}

	useEffect(() => {
		initializeGoogleSdk();
	}, []);
}
