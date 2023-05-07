import { Order } from "src/interfaces/order.interface";
import { products } from "./products.db";

export const orders: Order[]=[
    {id: "11", orderDate: new Date(), productsOrdered:[products[1]]},
    {id: "12", orderDate: new Date(), productsOrdered:[products[0],products[2]]},
    {id: "13", orderDate: new Date(), productsOrdered:[products[1],products[0]]}
]