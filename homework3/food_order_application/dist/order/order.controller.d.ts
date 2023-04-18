import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): import("../interfaces/product.interface").Product[];
}
