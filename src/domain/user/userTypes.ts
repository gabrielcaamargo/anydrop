export type UserAPI = {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	phoneNumber?: string | null;
	tenantId?: string | null;
	emailVerified?: boolean;
	isAnonymous?: boolean;
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
	lastSignInAt: string;
	phoneNumber?: string | null;
	tenantId?: string | null;
	emailVerified?: boolean;
	isAnonymous?: boolean;
};
