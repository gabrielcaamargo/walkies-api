export class User {
	constructor(
		public readonly id: string,
		public readonly fullName: string,
		public readonly email: string,
		public readonly password: string,
		public readonly phone: string,
		public readonly role: Role,
		public readonly avatarUrl: string,
		public readonly totalReviews: number,
		public readonly createdAt: Date,
		public readonly updatedAt: Date,
		public readonly verifiedAt: Date | null,
	) {}
}

export enum Role {
	WALKER = "WALKER",
	OWNER = "OWNER",
}
