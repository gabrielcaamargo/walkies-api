export interface AuthRepository {
	signUp(data: SignUpDto): Promise<void>;
}
