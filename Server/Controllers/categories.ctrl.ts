import * as express from 'express';
import * as procedures from '../Procedures/categories.proc';

let router = express.Router();

router.route('/')
    .get((req, res) => {
        procedures.getCategories()
        .then((categories) => {
            res.status(200).send(categories);
        }, (err) => {
            console.log(err);
            res.sendStatus(500);
        })
    });

export default router;