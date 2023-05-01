import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {OrderService} from './order.service'
import { OrderDto } from './dto/order.dto';
import { UpdateDto } from './dto/update.dto';
interface IdParams {
    id: string;
  }
@Controller('order')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
    ){}

    @Get()
    getOrders(){
        const orders = this.orderService.getOrders();
        return orders;
    }

    @Get(':id')
    orderById(@Param() params: IdParams){
        const id: string= params.id
        const order = this.orderService.orderById(id);
        return order;
    }

    @Post()
    createOrder(@Body() body:OrderDto, ){        
        const id = this.orderService.createOrder(body);
        return{
            message: `Order was created`,
            id: id
        }
    }
    @Put(':id')
    updateOrder(@Param() params:IdParams, @Body() body: UpdateDto){
        const id: string = params.id;
        this.orderService.updateOrder(id, body)
        return{
            message: `Order was updated`,
            id: id
        }
    }

    @Delete(':id')
    deleteOrder(@Param() params:IdParams){
        const id: string = params.id;
        this.orderService.deleteOrder(id)
        return{
            message: `Order was deleted`,
            id: id
        }

    }
}
