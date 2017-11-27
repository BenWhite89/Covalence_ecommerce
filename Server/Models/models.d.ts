export declare namespace models {
    interface ICategory {

    }
    interface IProduct {

    }
    interface IPurchase {
        price: number,
        stripeTransactionId: string
    }
    interface IId {
        purchaseId: number
    }
}