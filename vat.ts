export function calculerTTC(ht: number, taux = 0.2): number {
	return ht * (1 + taux);
}
