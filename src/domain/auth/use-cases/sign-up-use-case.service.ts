import {ConflictException, Injectable} from "@nestjs/common";
import type {AuthRepository} from "../auth.repository";
import {SignupResponse, UseCaseContract} from "@shared";
import {SignupDto} from "../dto/signup.dto";
import {Role} from "@domain";

import {hash} from "bcrypt";

@Injectable()
export class SignUpUseCaseService implements UseCaseContract<SignupDto, SignupResponse> {
	constructor(private readonly authRepository: AuthRepository) {}

	async execute(input: SignupDto, role: Role): Promise<SignupResponse> {
		const userExists = await this.authRepository.findUserByEmail(input.email);

		if (userExists) {
			throw new ConflictException("User already exists");
		}

		const SALT = 12;
		const hashedPassword = await hash(input.password, SALT);

		const user = await this.authRepository.signUp({...input, password: hashedPassword}, role);

		return user;
	}
}
