export class Walker {
	constructor(
		public readonly id: string,
		public readonly userId: string,
		public readonly totalWalks: number,
		public readonly serviceRadius: number,
		public readonly basePricePerWalk: number,
		public readonly isPriceNegotiable: boolean,
		public readonly balance: number,
		public readonly createdAt: Date,
		public readonly updatedAt: Date,
	) {}
}
