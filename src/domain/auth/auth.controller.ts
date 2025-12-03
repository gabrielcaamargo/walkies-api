import {Body, Controller, Post} from "@nestjs/common";
import {SignUpWalkerUseCaseService} from "./use-cases/sign-up-walker-use-case.service";
import {SignupDto} from "./dto/signup.dto";
import {SignupResponse} from "@shared";
import {Walker} from "../walker";

@Controller("auth")
export class AuthController {
	constructor(private readonly signUpWalkerUseCase: SignUpWalkerUseCaseService) {}

	@Post("signup/walker")
	async signUpWalker(@Body() signupDto: SignupDto): Promise<SignupResponse<Walker>> {
		return this.signUpWalkerUseCase.execute(signupDto);
	}
}
