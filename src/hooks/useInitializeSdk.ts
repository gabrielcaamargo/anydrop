import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

export function useInitializeSdk() {
	async function initializeGoogleSdk() {
		GoogleSignin.configure({
			webClientId:
				'933710790530-il0tf3m2150lc5travsenl03ssi9g0e3.apps.googleusercontent.com',
		});
	}

	useEffect(() => {
		initializeGoogleSdk();
	}, []);
}
