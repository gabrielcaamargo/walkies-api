import {Role, User} from "../user";
import {SignupDto} from "./dto/signup.dto";

export interface AuthRepository {
	signUp(data: SignupDto, role: Role): Promise<Omit<User, "password">>;
}
