import {AuthRepository, Role, User, SignupDto} from "@domain";
import {PrismaService} from "../prisma.service";

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

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const {password: _, ...userWithoutPassword} = user;
		return userWithoutPassword as Omit<User, "password">;
	}
}
