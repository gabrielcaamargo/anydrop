import {useEffect} from 'react';
import {authService} from './authService';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {userAdapter} from '../user';

export function useInitializeAuth() {
	useEffect(() => {
		const unsubscribe = authService.onAuthStateChanged(handleFirebaseUser);
		return unsubscribe;
	}, []);

	function handleFirebaseUser(firebaseUser: FirebaseAuthTypes.User | null) {
		if (firebaseUser) {
			const user = userAdapter.firebaseUserToUser(firebaseUser);
		}
	}
}
