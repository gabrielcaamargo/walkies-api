import {SignupResponse} from "@shared";
import {Role, User} from "../user";
import {SignupDto} from "./dto/signup.dto";

export interface AuthRepository {
	signUp(data: SignupDto, role: Role): Promise<SignupResponse>;
	findUserByEmail(email: string): Promise<User | null>;
}
