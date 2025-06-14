import {
	AppleAuthProvider,
	GoogleAuthProvider,
	getAuth,
	signInWithCredential,
} from '@react-native-firebase/auth';

import {appleAuth} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function useAuth() {
	async function signinWithApple() {
		// TODO: Enroll with Apple Developer Program to use Apple Sign-In

		const appleAuthResponse = await appleAuth.performRequest({
			requestedOperation: appleAuth.Operation.LOGIN,
			requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
		});

		if (!appleAuthResponse.identityToken) {
			throw new Error('Apple Sign-In failed - no identity token returned');
		}

		const {identityToken, nonce} = appleAuthResponse;
		const appleCredential = AppleAuthProvider.credential(identityToken, nonce);

		return signInWithCredential(getAuth(), appleCredential);
	}

	async function signinWithGoogle() {
		await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

		const signInResult = await GoogleSignin.signIn();
		const idToken = signInResult.data?.idToken;

		if (!idToken) {
			throw new Error('No ID token found');
		}

		const googleCredential = GoogleAuthProvider.credential(
			signInResult.data?.idToken,
		);

		return signInWithCredential(getAuth(), googleCredential);
	}

	return {
		signinWithApple,
		signinWithGoogle,
	};
}
