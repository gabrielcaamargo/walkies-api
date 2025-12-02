import {Module} from "@nestjs/common";
import {appModules} from "./appModules";

@Module({
	imports: appModules,
	controllers: [],
	providers: [],
})
export class AppModule {}
