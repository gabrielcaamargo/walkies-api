import {AuthRepository, Role, SignupDto} from "@domain";
import {PrismaService} from "../prisma.service";
import {UserAdapter} from "../../adapters/user.adapter";
import {SignupResponse} from "@shared";

export class AuthPrismaRepository implements AuthRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async signUp(data: SignupDto, role: Role): Promise<SignupResponse> {
		const user = await this.prismaService.user.create({
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
