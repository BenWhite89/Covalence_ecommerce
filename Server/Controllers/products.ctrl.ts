import * as express from 'express';
import * as procedures from '../Procedures/products.proc';

let router = express.Router();

router.route('/')
    .get((req, res) => {

    });

export default router;