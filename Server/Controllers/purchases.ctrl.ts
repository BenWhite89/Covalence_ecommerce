import * as express from 'express';
import * as procedures from '../Procedures/purchases.proc';
import * as stripeSvc from '../Services/stripe.svc'

let router = express.Router();

router.route('/')
    .post((req, res) => {
        stripeSvc.charge(req.body.token, req.body.total)
        .then((success) => {
            procedures.makePurchase(req.body.token, req.body.total)
            .then((id) => {
                for (let i = 0; i < req.body.products.length - 1; i ++) {
                    procedures.recordPurchasedProducts(id.purchaseId, req.body.products[i])
                    .then((success) => {
                        res.sendStatus(204)
                    }, (err) => {
                        res.sendStatus(500);
                        console.log(err);
                    })
                }
            })
        }, (err) => {
            res.sendStatus(500);
            console.log(err);
        })
    });

export default router;