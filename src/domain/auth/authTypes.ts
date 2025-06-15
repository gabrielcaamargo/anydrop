import {User} from '../user';

export interface AuthCredentials {
	user: User;
	token: string;
}
