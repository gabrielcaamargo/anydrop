import {
	AppleAuthProvider,
	getAuth,
	signInWithCredential,
} from '@react-native-firebase/auth';

import {appleAuth} from '@invertase/react-native-apple-authentication';

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

	return {
		signinWithApple,
	};
}
