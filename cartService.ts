import type { Product } from "./cart";
import type Cart from "./cart";
import { InMemoryProductRepository } from "./inMemoryProductRepository";

export interface EmailService {
	send(to: string, subject: string, body: string): void;
}

export class CartService {
	constructor(
		private cart: Cart,
		private productRepository: InMemoryProductRepository
	) {}

	addToCart(product: Product, qty: number) {
		if (this.productRepository.hasStock(product.id, qty)) {
			this.cart.add(product, qty);
			return true;
		}
		return false;
	}

	checkout(emailService: EmailService, email: string) {
		emailService.send(
			email,
			"Confirmation de commande",
			"Merci pour votre achat"
		);
		this.cart.clear();
	}
}
