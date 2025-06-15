import {createContext, useEffect, useState} from 'react';
import {userAdapter} from '../user';
import {AuthCredentials} from './authTypes';
import {authService} from './authService';
import {authCredentialsStorage} from './authCredentialsStorage';

interface AuthCredentialsProviderProps {
	children: React.ReactNode;
}

export interface AuthCredentialsContextType {
	authCredentials: AuthCredentials | null;
	saveAuthCredentials: (authCredentials: AuthCredentials) => Promise<void>;
	getAuthCredentials: () => Promise<AuthCredentials | null>;
}

export const AuthCredentialsContext = createContext<AuthCredentialsContextType>(
	{} as AuthCredentialsContextType,
);

export function AuthCredentialsProvider({
	children,
}: AuthCredentialsProviderProps) {
	const [authCredentials, setAuthCredentials] =
		useState<AuthCredentials | null>(null);

	useEffect(() => {
		const unsubscribe = authService.onAuthStateChanged(firebaseUser => {
			if (firebaseUser) {
				saveAuthCredentials({
					user: userAdapter.firebaseUserToUser(firebaseUser),
				});
			}
		});
		return unsubscribe;
	}, []);

	async function saveAuthCredentials(
		authCredentials: AuthCredentials,
	): Promise<void> {
		await authCredentialsStorage.set(authCredentials);
	}

	async function getAuthCredentials(): Promise<AuthCredentials | null> {
		return authCredentialsStorage.get();
	}

	return (
		<AuthCredentialsContext.Provider
			value={{
				authCredentials,
				getAuthCredentials,
				saveAuthCredentials,
			}}>
			{children}
		</AuthCredentialsContext.Provider>
	);
}
