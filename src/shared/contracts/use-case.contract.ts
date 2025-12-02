export interface UseCaseContract<Input, Output> {
	execute(input: Input, ...args: unknown[]): Promise<Output>;
}
