import {Module} from "@nestjs/common";
import {authProviders} from "./auth.providers";
import {AuthController} from "./auth.controller";

@Module({
	imports: [],
	providers: [...authProviders],
	controllers: [AuthController],
})
export class AuthModule {}
