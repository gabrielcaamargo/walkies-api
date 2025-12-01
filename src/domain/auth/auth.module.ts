import {Module} from "@nestjs/common";
import {SignUpUseCaseService} from "./use-cases/sign-up-use-case.service";

@Module({
	imports: [],
	providers: [SignUpUseCaseService],
})
export class AuthModule {}
