import {CreateWalkerDto} from "./dto/create-walker.dto";
import {Walker} from "./walker.entity";

export abstract class WalkerRepository {
	abstract create(data: CreateWalkerDto): Promise<Walker>;
}
