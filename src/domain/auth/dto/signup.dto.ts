import {IsEmail, IsNotEmpty, IsString, Matches} from "class-validator";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

export class SignupDto {
	@IsEmail()
	@IsString({message: "Email must be a valid email address"})
	email: string;

	@IsString({message: "Full name is required"})
	@IsNotEmpty({message: "Full name is required"})
	fullName: string;

	@IsString({message: "Password is required"})
	@Matches(PASSWORD_REGEX, {
		message:
			"Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 symbol",
	})
	password: string;
}
