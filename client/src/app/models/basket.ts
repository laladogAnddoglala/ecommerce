export interface Basket {
    id:      number;
    buyerId: string;
    items:   BasketItem[];
}

export interface BasketItem {
    productId:  number;
    quantity:   number;
    name:       string;
    price:      number;
    pictureUrl: string;
    type:       string;
    brand:      string;
}