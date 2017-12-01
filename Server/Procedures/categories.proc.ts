import * as db from '../Config/db';
import {models} from '../Models/models.d';

export function getCategories(): Promise<Array<models.ICategory>> {
    return db.rows('GetCategories', []);
}