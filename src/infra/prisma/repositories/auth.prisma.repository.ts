import {AuthRepository, Role, SignupDto, User} from "@domain";
import {PrismaService} from "../prisma.service";
import {UserAdapter} from "../../adapters/user.adapter";
import {SignupResponse} from "@shared";
import {Injectable} from "@nestjs/common";

@Injectable()
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

	async findUserByEmail(email: string): Promise<User | null> {
		const user = await this.prismaService.user.findUnique({
			where: {
				email: email.toLowerCase(),
			},
		});
		return user ? UserAdapter.prismaToUser(user) : null;
	}
}
