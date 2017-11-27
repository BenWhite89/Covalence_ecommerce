import * as express from 'express';
import categories from './Controllers/categories.ctrl';
import products from './Controllers/products.ctrl';
import purchases from './Controllers/purchases.ctrl';


let router = express();

router.use('/categories', categories);
router.use('/products', products);
router.use('/purchases', purchases);

export default router;
