import {Role, User} from "@domain";
import {User as PrismaUser} from "generated/prisma/client";

export class UserAdapter {
	static prismaToUser(user: PrismaUser): User {
		return {
			id: user.id,
			fullName: user.fullName,
			email: user.email,
			password: user.password,
			phone: user.phone,
			role: user.role as Role,
			avatarUrl: user.avatarUrl,
			totalReviews: user.totalReviews,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			verifiedAt: user.verifiedAt ?? null,
		};
	}
}
