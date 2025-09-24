export class InMemoryProductRepository {
	private productStock = new Map<number, number>();

	addProduct(productId: number, quantity: number) {
		this.productStock.set(productId, quantity);
	}

	hasStock(productId: number, requiredQuantity: number): boolean {
		return (this.productStock.get(productId) ?? 0) >= requiredQuantity;
	}
}
