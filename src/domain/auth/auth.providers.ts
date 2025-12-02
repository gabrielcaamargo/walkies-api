import {AuthPrismaRepository, PrismaService} from "src/infra";
import {SignUpUseCaseService} from "./use-cases/sign-up-use-case.service";
import {AuthRepository} from "./auth.repository";

export const authProviders = [
	{
		provide: AuthRepository,
		useClass: AuthPrismaRepository,
	},
	PrismaService,
	SignUpUseCaseService,
];
