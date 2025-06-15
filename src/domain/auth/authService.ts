import {FirebaseAuthTypes, getAuth} from '@react-native-firebase/auth';

async function userLoggedIn(): Promise<FirebaseAuthTypes.User | null> {
	return getAuth().currentUser;
}

function onAuthStateChanged(
	callback: (user: FirebaseAuthTypes.User | null) => void,
): () => void {
	return getAuth().onAuthStateChanged(callback);
}

export const authService = {userLoggedIn, onAuthStateChanged};
