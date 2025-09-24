# 🔵 - TD Fil Rouge : Panier E-Commerce en TDD

## Objectif
Construire une application simple de **panier e-commerce** en TDD avec itérations Red–Green–Refactor.

## Périmètre fonctionnel
- **S1** : Ajouter un article au panier avec quantité.
- **S2** : Mettre à jour / retirer un article.
- **S3** : Calculer total HT, TVA, TTC.
- **S4** : Gérer des coupons (-10% ou -5€).
- **S5** : Vérifier le stock via un dépôt (fake in-memory).
- **S6** : Checkout → vider panier + envoi email (mocké).
- **S7** : Recalcul debouncé (timers).

---

## Plan de travail

### Itération 0 — Squelette
- Créer `Cart.js` vide.
- Écrire un test `add()` qui échoue.

### Itération 1 — Ajouter article
- Écrire tests `add()`.
- Implémenter code minimal.
- Refactorer pour gérer `Map`.

### Itération 2 — Update/Remove
- Écrire tests pour `updateQty` et suppression.
- Implémenter.

### Itération 3 — Totaux & TVA
- Créer `vat.js` avec règles.
- Écrire tests pour `totals()`.
- Implémenter avec `toBeCloseTo`.

### Itération 4 — Coupons
- Créer `discounts.js`.
- Écrire tests Given/When/Then (coupon expiré, montant min).
- Implémenter logique.

### Itération 5 — Stock (service)
- Créer `InMemoryProductRepo`.
- Implémenter `CartService` qui vérifie stock avant ajout.
- Mock emailService pour checkout.

### Itération 6 — Timers debounce
- Implémenter recalcul debouncé à 200ms.
- Tester avec `jest.useFakeTimers()`.

### Itération 7 — Snapshot & Coverage
- Snapshot de la commande (`order`) au checkout.
- Exécuter `jest --coverage`.

---

## Évaluation
- Respect du cycle TDD.
- Qualité des tests (AAA vs GWT).
- Usage correct de mocks/spies/fakes.
- Couverture > 85%.
- Code clair et refactorisé.

---

# 🎯 Bilan 
- **TD fil rouge** : mettre en pratique TDD sur une app concrète (panier e-commerce).  
