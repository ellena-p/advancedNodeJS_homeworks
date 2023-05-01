"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let OrderService = class OrderService {
    constructor() {
        this._orders = [
            { id: "11", orderDate: new Date(), productsOrdered: [{ id: "1", productName: "Cesar Salad", productPrice: 250 }]
            },
            { id: "12", orderDate: new Date(), productsOrdered: [{ id: "1", productName: "Cesar Salad", productPrice: 250 },
                    { id: "2", productName: " Egg Salad", productPrice: 200 }]
            },
            { id: "13", orderDate: new Date(), productsOrdered: [{ id: "3", productName: "Tomato Salad", productPrice: 190 },
                    { id: "1", productName: "Cesar Salad", productPrice: 250 }]
            }
        ];
    }
    getOrders() {
        return this._orders;
    }
    orderById(id) {
        const order = this._orders.find((order) => order.id === id);
        if (order === undefined) {
            throw new common_1.HttpException(`Id ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return order;
    }
    createOrder(orderDto) {
        const order = Object.assign({ id: (0, uuid_1.v4)(), orderDate: new Date() }, orderDto);
        this._orders.push(order);
        return order.id;
    }
    updateOrder(id, updateDto) {
        const order = this._orders.find((order) => order.id === id);
        const upOrder = this._orders.map((order) => {
            if (order.id === id) {
                return Object.assign({ id: id, orderDate: new Date() }, updateDto);
            }
            return order;
        });
        if (order === undefined) {
            throw new common_1.HttpException(`Id ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        this._orders = upOrder;
        return upOrder;
    }
    deleteOrder(id) {
        let delOrder = this._orders.filter((orders) => orders.id !== id);
        if (delOrder.length === this._orders.length) {
            throw new common_1.HttpException(`Order with id ${id} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        this._orders = delOrder;
        return delOrder;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map