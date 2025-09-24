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

	totals() {
		const ht = this.items.reduce(
			(acc, item) => acc + item.product.price * item.quantity,
			0
		);
		const tva = ht * 0.2;
		const ttc = calculerTTC(ht);
		return { ht, tva, ttc };
	}

	getItems() {
		return this.items;
	}
}

export default Cart;
