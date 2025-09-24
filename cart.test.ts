import Cart from "./cart";

describe("Cart", () => {
	let cart: Cart;

	beforeEach(() => {
		cart = new Cart();
	});

	it("add() ajoute un article avec quantité", () => {
		cart.add({ id: 1, name: "Jeu", price: 50 }, 2);
		expect(cart.getItems()).toEqual([
			{ product: { id: 1, name: "Jeu", price: 50 }, quantity: 2 },
		]);
	});

	it("updateQuantity() modifie la quantité ou retire l'item", () => {
		cart.add({ id: 1, name: "Jeu", price: 50 }, 2);
		cart.updateQuantity(1, 3);
		expect(cart.getItems()[0]?.quantity).toBe(3);
		cart.updateQuantity(1, 0);
		expect(cart.getItems()).toEqual([]);
	});

	it("totals() retourne HT, TVA, TTC", () => {
		cart.add({ id: 2, name: "Clavier", price: 100 }, 2);
		const totals = cart.totals();
		expect(totals.ht).toBeCloseTo(200);
		expect(totals.tva).toBeCloseTo(40);
		expect(totals.ttc).toBeCloseTo(240);
	});
});
