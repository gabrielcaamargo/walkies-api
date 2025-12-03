import {CreateWalkerDto, Walker, WalkerRepository} from "@domain";
import {WalkerAdapter} from "../../adapters";
import {PrismaService} from "../prisma.service";
import {Injectable} from "@nestjs/common";

@Injectable()
export class WalkerPrismaRepository implements WalkerRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async create(data: CreateWalkerDto): Promise<Walker> {
		const walker = await this.prismaService.walker.create({
			data: {
				userId: data.userId,
			},
		});

		return WalkerAdapter.prismaToWalker(walker);
	}
}
