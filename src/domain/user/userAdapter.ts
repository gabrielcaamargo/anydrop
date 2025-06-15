import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {User, UserAPI} from './userTypes';

function toUser(userAPI: UserAPI): User {
	return {
		id: userAPI.uid,
		email: userAPI.email,
		displayName: userAPI.displayName,
		photoURL: userAPI.photoURL,
		createdAt: new Date(userAPI.metadata.creationTime).toISOString(),
		lastSignInAt: new Date(userAPI.metadata.lastSignInTime).toISOString(),
		emailVerified: userAPI.emailVerified,
		isAnonymous: userAPI.isAnonymous,
		phoneNumber: userAPI.phoneNumber,
		tenantId: userAPI.tenantId,
	};
}

function toUserAPI(user: User): UserAPI {
	return {
		uid: user.id,
		email: user.email,
		displayName: user.displayName,
		photoURL: user.photoURL,
		phoneNumber: user.phoneNumber,
		tenantId: user.tenantId,
		emailVerified: user.emailVerified,
		isAnonymous: user.isAnonymous,
		metadata: {
			creationTime: new Date(user.createdAt).getTime(),
			lastSignInTime: new Date(user.createdAt).getTime(),
		},
	};
}

function firebaseUserToUser(user: FirebaseAuthTypes.User): User {
	return {
		displayName: user.displayName!,
		createdAt: user.metadata.creationTime!,
		email: user.email!,
		emailVerified: user.emailVerified,
		id: user.uid,
		isAnonymous: user.isAnonymous,
		lastSignInAt: user.metadata.lastSignInTime!,
		photoURL: user.photoURL || '',
	};
}

export const userAdapter = {
	toUser,
	toUserAPI,
	firebaseUserToUser,
};
