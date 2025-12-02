import {Body, Controller, Param, Post} from "@nestjs/common";
import {SignUpUseCaseService} from "./use-cases/sign-up-use-case.service";
import {SignupDto} from "./dto/signup.dto";
import {SignupResponse} from "@shared";
import {Role} from "../user";

@Controller("auth")
export class AuthController {
	constructor(private readonly signUpUseCase: SignUpUseCaseService) {}

	@Post("signup/:role")
	async signUp(@Body() signupDto: SignupDto, @Param("role") role: Role): Promise<SignupResponse> {
		return this.signUpUseCase.execute(signupDto, role);
	}
}
