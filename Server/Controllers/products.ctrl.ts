import * as express from 'express';
import * as procedures from '../Procedures/products.proc';

let router = express.Router();

router.route('/')
    .get((req, res) => {
        procedures.getProducts()
        .then((products) => {
            res.status(200).send(products);
        }, (err) => {
            console.log(err);
            res.sendStatus(500);
        })
    })

router.route('/:id')
    .get((req, res) => {
        procedures.getProductById(req.params.id)
        .then((product) => {
            res.status(200).send(product);
        }, (err) => {
            console.log(err);
            res.sendStatus(500);
        })
    });

export default router;