import * as Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export function charge(token: string, total: number) {
    return stripe.charges.create({
        amount: total * 100,
        currency: 'usd',
        source: token,
        description: `${Date.now()}`
    });
}