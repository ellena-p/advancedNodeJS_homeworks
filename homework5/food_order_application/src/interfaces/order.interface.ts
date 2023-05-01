import { Product } from "./product.interface";
import { products } from "src/db/products.db";
export interface Order {
    id: string;
    orderDate: Date;
    productsOrdered: Product[];
  }
  