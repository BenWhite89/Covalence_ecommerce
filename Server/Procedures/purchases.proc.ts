import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function createPurchase(stripeId: string, price: number): Promise<models.IId> {
    return db.row('CreatePurchase', [stripeId, price]);
}

export function createPurchasesProducts(productId: number, purchaseId: number) {
    return db.empty('createPurchasedProducts', [productId, purchaseId]);
}