import { OrderDto } from './dto/order.dto';
import { Order } from 'src/interfaces/order.interface';
import { UpdateDto } from './dto/update.dto';
export declare class OrderService {
    private _orders;
    getOrders(): Order[];
    orderById(id: string): Order;
    createOrder(orderDto: OrderDto): string;
    updateOrder(id: string, updateDto: UpdateDto): Order[];
    deleteOrder(id: string): Order[];
}
