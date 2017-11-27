import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function getProducts(): Promise<Array<models.IProduct>> {
    return db.rows('GetProducts', []);
}