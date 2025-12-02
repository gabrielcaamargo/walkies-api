import {User} from "@domain";

export interface SignupResponse extends Omit<User, "password"> {}
