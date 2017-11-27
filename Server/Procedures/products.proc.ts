import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function getProducts(): Promise<Array<models.IProduct>> {
    return db.rows('GetProducts', []);
}

export function getProductById(id: number): Promise<models.IProduct> {
    return db.row('GetProductById', [id])
}