import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
	return {
		id: userAPI.uid,
		email: userAPI.email,
		displayName: userAPI.displayName,
		photoURL: userAPI.photoURL,
		createdAt: new Date(userAPI.metadata.creationTime).toISOString(),
		lastSignInAt: new Date(userAPI.metadata.lastSignInTime).toISOString(),
	};
}

function toUserAPI(user: User): UserAPI {
	return {
		uid: user.id,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		metadata: {
			creationTime: new Date(user.createdAt).getTime(),
			lastSignInTime: new Date(user.createdAt).getTime(),
		},
	};
}

export const userAdapter = {
	toUser,
	toUserAPI,
};
