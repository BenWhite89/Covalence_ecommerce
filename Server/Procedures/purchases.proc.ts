import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function createPurchase(price: number, stripeId: string): Promise<models.IId> {
    return db.row('CreatePurchase', [price, stripeId]);
}

export function createPurchasesProducts(product: any, purchaseId: number) {
    return db.empty('CreatePurchasesProducts', [product.productId, purchaseId, product.count]);
}