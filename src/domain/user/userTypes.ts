export type UserAPI = {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	metadata: {
		creationTime: number;
		lastSignInTime: number;
	};
};

export type User = {
	id: string;
	email: string;
	displayName: string;
	photoURL: string;
	createdAt: string;
};
