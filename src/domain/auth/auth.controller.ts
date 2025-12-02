import {Body, Controller, Post} from "@nestjs/common";
import {SignUpWalkerUseCaseService} from "./use-cases/sign-up-walker-use-case.service";
import {SignupDto} from "./dto/signup.dto";
import {SignupResponse} from "@shared";

@Controller("auth")
export class AuthController {
	constructor(private readonly signUpWalkerUseCase: SignUpWalkerUseCaseService) {}

	@Post("signup/walker")
	async signUpWalker(@Body() signupDto: SignupDto): Promise<SignupResponse> {
		return this.signUpWalkerUseCase.execute(signupDto);
	}
}
