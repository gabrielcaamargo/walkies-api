import {IsNotEmpty, IsString} from "class-validator";

export class CreateWalkerDto {
	@IsString({message: "User ID is required"})
	@IsNotEmpty({message: "User ID is required"})
	userId: string;
}
