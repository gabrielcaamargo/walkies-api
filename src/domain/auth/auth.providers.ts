import {AuthPrismaRepository, PrismaService} from "src/infra";
import {SignUpWalkerUseCaseService} from "./use-cases/sign-up-walker-use-case.service";
import {AuthRepository} from "./auth.repository";

export const authProviders = [
	{
		provide: AuthRepository,
		useClass: AuthPrismaRepository,
	},
	PrismaService,
	SignUpWalkerUseCaseService,
];
