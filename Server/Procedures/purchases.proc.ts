import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function makePurchase(stripeId: string, price: number): Promise<models.IId> {
    return db.row('MakePurchase', [stripeId, price]);
}

export function recordPurchasedProducts(productId: number, purchaseId: number) {
    return db.empty('RecordPurchasedProducts', [productId, purchaseId]);
}