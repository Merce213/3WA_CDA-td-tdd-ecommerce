import { calculerTTC } from "./vat";

export interface Product {
	id: number;
	name: string;
	price: number;
}
export interface CartItem {
	product: Product;
	quantity: number;
}
class Cart {
	private items: CartItem[] = [];
	private timer?: NodeJS.Timeout;

	add(product: Product, quantity = 1) {
		this.items.push({ product, quantity });
	}

	updateQuantity(productId: number, newQuantity: number) {
		this.items = this.items
			.map((item) =>
				item.product.id === productId
					? { ...item, quantity: newQuantity }
					: item
			)
			.filter((item) => item.quantity > 0);
	}

	clear() {
		this.items = [];
	}

	totals() {
		const ht = this.items.reduce(
			(acc, item) => acc + item.product.price * item.quantity,
			0
		);
		const tva = ht * 0.2;
		const ttc = calculerTTC(ht);
		return { ht, tva, ttc };
	}

	recalcDebounced(cb: () => void) {
		clearTimeout(this.timer);
		this.timer = setTimeout(cb, 200);
	}

	getItems() {
		return this.items;
	}
}

export default Cart;
