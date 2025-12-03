import {Injectable} from "@nestjs/common";
import {SignupResponse, UseCaseContract} from "@shared";
import {SignupDto} from "../dto/signup.dto";
import {Role, Walker, WalkerRepository} from "@domain";

import {SignUpBaseService} from "./sign-up-base.service";

@Injectable()
export class SignUpWalkerUseCaseService implements UseCaseContract<SignupDto, Walker> {
	constructor(
		private readonly walkerRepository: WalkerRepository,
		private readonly signUpBaseService: SignUpBaseService,
	) {}

	async execute(input: SignupDto): Promise<SignupResponse<Walker>> {
		const user = await this.signUpBaseService.execute(input, Role.WALKER);

		const walker = await this.walkerRepository.create({userId: user.id});

		return walker;
	}
}
