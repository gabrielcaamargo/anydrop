import {storage} from '@storage';
import {AuthCredentials} from './authTypes';

const AUTH_KEY = '@Auth';

async function set(authCredentials: AuthCredentials) {
	await storage.setItem(AUTH_KEY, authCredentials);
}

async function get(): Promise<AuthCredentials | null> {
	return storage.getItem<AuthCredentials>(AUTH_KEY);
}

async function remove() {
	await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {
	set,
	get,
	remove,
};
