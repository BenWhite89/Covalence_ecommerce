import * as express from 'express';
import * as procedures from '../Procedures/purchases.proc';
import * as stripeSvc from '../Services/stripe.svc'

let router = express.Router();

router.route('/')
    .post((req, res) => {
        // first create the stripe charge
        stripeSvc.charge(req.body.token, req.body.amount)
        .then((success) => {
            // after success, insert purchase info into our Purchase table first
            procedures.createPurchase(req.body.amount/100, success.id)
            .then((id) => {
                for (let i = 0; i < req.body.products.length; i ++) {
                    // now insert items purchased within this order into our PurchasesProducts table
                    procedures.createPurchasesProducts(req.body.products[i], id.id)
                    .then((success) => {
                        res.sendStatus(204);
                    }, (err) => {
                        res.sendStatus(500);
                        console.log(err);
                    })
                };
            })
        }, (err) => {
            res.sendStatus(500);
            console.log(err);
        })
    });

export default router;