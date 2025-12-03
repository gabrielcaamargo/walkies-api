import {Walker} from "@domain";
import {Walker as PrismaWalker} from "generated/prisma/client";

export class WalkerAdapter {
	static prismaToWalker(walker: PrismaWalker): Walker {
		return {
			id: walker.id,
			userId: walker.userId,
			totalWalks: walker.totalWalks,
			serviceRadius: walker.serviceRadius,
			basePricePerWalk: walker.basePricePerWalk,
			isPriceNegotiable: walker.isPriceNegotiable,
			balance: walker.balance,
			createdAt: walker.createdAt,
			updatedAt: walker.updatedAt,
		};
	}
}
