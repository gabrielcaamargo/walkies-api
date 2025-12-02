import {ConflictException, Injectable} from "@nestjs/common";
import {AuthRepository} from "../auth.repository";
import {SignupResponse, UseCaseContract} from "@shared";
import {SignupDto} from "../dto/signup.dto";
import {Role} from "@domain";

import {hash} from "bcrypt";

@Injectable()
export class SignUpWalkerUseCaseService implements UseCaseContract<SignupDto, SignupResponse> {
	constructor(private readonly authRepository: AuthRepository) {}

	async execute(input: SignupDto): Promise<SignupResponse> {
		const userExists = await this.authRepository.findUserByEmail(input.email);

		if (userExists) {
			throw new ConflictException("User already exists");
		}

		const SALT = 12;
		const hashedPassword = await hash(input.password, SALT);

		const user = await this.authRepository.signUp({...input, password: hashedPassword}, Role.WALKER);

		return user;
	}
}
