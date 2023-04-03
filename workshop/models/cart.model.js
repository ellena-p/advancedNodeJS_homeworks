import mongoose from "mongoose";

import cartSchema from "../schemas/cart.schema.js";

class CartModel{
    mongo_model;
    constructor(){
        this.mongo_model = mongoose.model("Cart", cartSchema) 
    }

    async addProducToCart(cartData){
        const cart = new this.mongo_model(cartData);

        await cart.save()
    }
    
    async allCarts(){
        const carts = await this.mongo_model.find().populate('productsInCart'); 
        return carts;
    }
}

export default CartModel;