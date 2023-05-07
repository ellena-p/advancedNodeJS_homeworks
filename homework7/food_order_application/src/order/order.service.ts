import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { Order } from 'src/interfaces/order.interface';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDto } from './dto/update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';




@Injectable()
export class OrderService {
    constructor (
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>
    ){}
    private _orders: Order[] = [
        { id: "11", orderDate: new Date(), productsOrdered:
            [{ id: "1", productName: "Cesar Salad", productPrice: 250 }]
        },
        { id: "12", orderDate: new Date(), productsOrdered:
            [{ id: "1", productName: "Cesar Salad", productPrice: 250 },
            { id: "2", productName: " Egg Salad", productPrice: 200 }] 
        },
        { id: "13", orderDate: new Date(), productsOrdered: 
            [{id:"3", productName:"Tomato Salad", productPrice: 190},
            { id: "1", productName: "Cesar Salad", productPrice: 250 }]
        }
    ]

    getOrders() {
        return this.orderRepository.find({
            relations:['productsOrdered']
        })
    }

    orderById(id: string) {
        const order = this.orderRepository.findOne({
            where:{id: id},
            relations:['productsOrdered']
        })
        if (!order) {
            throw new NotFoundException(`Order with id: ${id} was not found.`);
          }
      

        return order;
    }

    createOrder(orderDto: OrderDto) {


        const order: Order = {
            
            id: uuidv4(),
            orderDate: new Date(),
            ...orderDto

        }

        this._orders.push(order);

        return order.id
    }

    updateOrder(id: string, updateDto : UpdateDto) {
        const order = this._orders.find((order) => order.id === id)
        const upOrder= this._orders.map((order)=>{
            if(order.id === id){
                return{
                
                id: id,
                orderDate: new Date(),
                ...updateDto
            }
            
            }
            return order
        })

       if(order === undefined){
            throw new HttpException(`Id ${id} was not found`, HttpStatus.NOT_FOUND)
        }
        this._orders=upOrder
        return upOrder

    }
    deleteOrder(id: string) {

        let delOrder = this._orders.filter((orders) => orders.id !== id)
        
        if (delOrder.length === this._orders.length) {
            throw new HttpException(`Order with id ${id} was not found`, HttpStatus.NOT_FOUND)
        }
       
        this._orders = delOrder

        return delOrder

    }
}
