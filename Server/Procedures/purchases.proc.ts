import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function makePurchase(stripeId: string, price: number, products: Array<models.IProduct>) {
    return db.empty('MakePurchase', [stripeId, price, products]);
}