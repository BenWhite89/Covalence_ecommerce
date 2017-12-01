export declare namespace models {
    interface ICategory {
        id: number,
        name: string
    }
    interface IProduct {
        productId: number,
        categoryId: number,
        categoryName: string,
        title: string,
        description: string,
        price: number,
        imageUrl: string
    }
    interface IId {
        purchaseId: number
    }
}