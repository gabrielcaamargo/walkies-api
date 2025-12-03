import {ConflictException, Injectable} from "@nestjs/common";
import {AuthRepository} from "../auth.repository";
import {SignupDto} from "../dto/signup.dto";
import {Role, User} from "@domain";
import {hash} from "bcrypt";

@Injectable()
export class SignUpBaseService {
	private readonly SALT = 12;

	constructor(private readonly authRepository: AuthRepository) {}

	async execute(input: SignupDto, role: Role): Promise<Omit<User, "password">> {
		const userExists = await this.authRepository.findUserByEmail(input.email);

		if (userExists) {
			throw new ConflictException("User already exists");
		}

		const hashedPassword = await hash(input.password, this.SALT);

		return this.authRepository.signUp({...input, password: hashedPassword}, role);
	}
}
