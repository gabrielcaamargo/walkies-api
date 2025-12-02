import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./domain/auth/auth.module";

export const appModules = [
	ConfigModule.forRoot({
		isGlobal: true,
		envFilePath: ".env",
	}),
	AuthModule,
];
