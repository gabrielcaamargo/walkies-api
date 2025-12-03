import {ConflictException, Injectable} from "@nestjs/common";
import {AuthRepository} from "../auth.repository";
import {SignupResponse, UseCaseContract} from "@shared";
import {SignupDto} from "../dto/signup.dto";
import {Role, Walker, WalkerRepository} from "@domain";

import {hash} from "bcrypt";

@Injectable()
export class SignUpWalkerUseCaseService implements UseCaseContract<SignupDto, Walker> {
	constructor(
		private readonly authRepository: AuthRepository,
		private readonly walkerRepository: WalkerRepository,
	) {}

	async execute(input: SignupDto): Promise<SignupResponse<Walker>> {
		const userExists = await this.authRepository.findUserByEmail(input.email);

		if (userExists) {
			throw new ConflictException("User already exists");
		}

		const SALT = 12;
		const hashedPassword = await hash(input.password, SALT);

		const user = await this.authRepository.signUp({...input, password: hashedPassword}, Role.WALKER);

		const walker = await this.walkerRepository.create({userId: user.id});

		return walker;
	}
}
