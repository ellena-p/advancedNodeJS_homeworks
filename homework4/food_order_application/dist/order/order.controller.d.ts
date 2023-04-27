import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { UpdateDto } from './dto/update.dto';
interface IdParams {
    id: string;
}
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): import("../interfaces/order.interface").Order[];
    orderById(params: IdParams): import("../interfaces/order.interface").Order;
    createOrder(body: OrderDto): {
        message: string;
        id: string;
    };
    updateOrder(params: IdParams, body: UpdateDto): {
        message: string;
        id: string;
    };
    deleteOrder(params: IdParams): {
        message: string;
        id: string;
    };
}
export {};
