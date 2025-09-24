import Cart from "./cart";
import { CartService, type EmailService } from "./cartService";
import { InMemoryProductRepository } from "./inMemoryProductRepository";

describe("CartService", () => {
	let cart: Cart;
	let productRepository: InMemoryProductRepository;
	let cartService: CartService;
	let emailService: EmailService;

	beforeEach(() => {
		cart = new Cart();
		productRepository = new InMemoryProductRepository();
		cartService = new CartService(cart, productRepository);
	});

	it("addToCart() ajoute un article avec quantité", () => {
		productRepository.addProduct(1, 10);

		expect(
			cartService.addToCart({ id: 1, name: "Jeu", price: 50 }, 2)
		).toBe(true);
	});

	it("addToCart() retourne false si le stock est insuffisant", () => {
		productRepository.addProduct(1, 2);

		expect(
			cartService.addToCart({ id: 1, name: "Jeu", price: 50 }, 10)
		).toBe(false);
	});

	it("checkout mocke emailService", () => {
		cart.add({ id: 1, name: "Souris", price: 80 }, 1);

		const emailService: EmailService = {
			send: jest.fn(),
		};

		cartService.checkout(emailService, "client@demo.com");

		expect(emailService.send).toHaveBeenCalledWith(
			"client@demo.com",
			"Confirmation de commande",
			"Merci pour votre achat"
		);
		expect(cart.getItems()).toEqual([]);
	});
});
