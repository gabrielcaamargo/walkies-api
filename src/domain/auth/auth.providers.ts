import {SignUpWalkerUseCaseService} from "./use-cases/sign-up-walker-use-case.service";
import {AuthRepository} from "./auth.repository";
import {AuthPrismaRepository, PrismaService, WalkerPrismaRepository} from "@infra";
import {WalkerRepository} from "../walker";
import {Provider} from "@nestjs/common";
import {SignUpBaseService} from "./use-cases/sign-up-base.service";

export const authProviders = [
	{
		provide: AuthRepository,
		useClass: AuthPrismaRepository,
	},
	{
		provide: WalkerRepository,
		useClass: WalkerPrismaRepository,
	},
	PrismaService,
	SignUpWalkerUseCaseService,
	SignUpBaseService,
] as const satisfies Provider<unknown>[];
