import {use} from 'react';
import {AuthCredentialsContext} from './AuthCredentialsProvider';

export function useAuthCredentialsProvider() {
	return use(AuthCredentialsContext);
}
