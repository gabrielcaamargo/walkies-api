import {AuthRepository, Role, User, SignupDto} from "@domain";
import {PrismaService} from "../prisma.service";
import {UserAdapter} from "../../adapters/user.adapter";

export class AuthPrismaRepository implements AuthRepository {
	constructor(private readonly prisma: PrismaService) {}

	async signUp(data: SignupDto, role: Role): Promise<Omit<User, "password">> {
		const user = await this.prisma.user.create({
			data: {
				email: data.email,
				fullName: data.fullName,
				password: data.password,
				role,
			},
		});

		const adaptedUser = UserAdapter.prismaToUser(user);

		const {password: _, ...userWithoutPassword} = adaptedUser;

		return userWithoutPassword;
	}
}
