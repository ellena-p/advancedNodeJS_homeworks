import CartModel from "../models/cart.model.js";

const cartModel = new CartModel();

class CartController{

    async addProductToCart(req,res){

        const {productId}= req.body;
        const cartData = {
            productsInCart: productId
        }

        try {
            await cartModel.addProducToCart(cartData);
            res.status(201).send({message: "Added to cart."})
        } catch (error) {
            res.send("Error occured")
        }

    }

    async allCarts(req,res){
        const response = await cartModel.allCarts();

        res.send(response);
    }
}

export default CartController;