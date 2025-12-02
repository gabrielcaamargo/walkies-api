import {SignupResponse} from "@shared";
import {Role, User} from "../user";
import {SignupDto} from "./dto/signup.dto";

export abstract class AuthRepository {
	abstract signUp(data: SignupDto, role: Role): Promise<SignupResponse>;
	abstract findUserByEmail(email: string): Promise<User | null>;
}
