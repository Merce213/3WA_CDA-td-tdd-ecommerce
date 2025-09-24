export interface Coupon {
	type: "PERCENT" | "AMOUNT";
	value: number;
	minAmount: number;
	expired?: boolean;
}

export function applyDiscount(ht: number, coupon?: Coupon): number {
	if (!coupon || coupon.expired || ht < coupon.minAmount) return ht;
	return coupon.type === "PERCENT"
		? ht * (1 - coupon.value)
		: ht - coupon.value;
}
