import {SignupResponse} from "@shared";
import {Role} from "../user";
import {SignupDto} from "./dto/signup.dto";

export interface AuthRepository {
	signUp(data: SignupDto, role: Role): Promise<SignupResponse>;
}
