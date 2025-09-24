import { applyDiscount, type Coupon } from "./discounts";

describe("applyDiscount", () => {
	it("coupon -10% appliqué sur 300$", () => {
		const coupon: Coupon = { type: "PERCENT", value: 0.1, minAmount: 10 };
		expect(applyDiscount(300, coupon)).toBe(270);
	});

	it("coupon 10$ appliqué sur 100$", () => {
		const coupon: Coupon = { type: "AMOUNT", value: 10, minAmount: 100 };
		expect(applyDiscount(100, coupon)).toBe(90);
	});

	it("coupon expiré non appliqué", () => {
		const coupon: Coupon = {
			type: "PERCENT",
			value: 0.1,
			minAmount: 10,
			expired: true,
		};
		expect(applyDiscount(100, coupon)).toBe(100);
	});
});
