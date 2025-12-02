import {Injectable} from "@nestjs/common";
import type {AuthRepository} from "../auth.repository";
import {SignupResponse, UseCaseContract} from "@shared";
import {SignupDto} from "../dto/signup.dto";
import {Role} from "@domain";

@Injectable()
export class SignUpUseCaseService implements UseCaseContract<SignupDto, SignupResponse> {
	constructor(private readonly authRepository: AuthRepository) {}

	async execute(input: SignupDto, role: Role): Promise<SignupResponse> {
		const user = await this.authRepository.signUp(input, role);

		return user;
	}
}
