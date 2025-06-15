import {useEffect} from 'react';
import {authService} from './authService';

export function useInitializeAuth() {
	useEffect(() => {
		const unsubscribe = authService.onAuthStateChanged(firebaseUser => {
			console.log({user: firebaseUser});
		});
		return unsubscribe;
	}, []);
}
