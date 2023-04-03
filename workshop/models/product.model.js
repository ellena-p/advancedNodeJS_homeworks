import mongoose from "mongoose";

import productSchema from "../schemas/product.schema.js";

class ProductModel{
    mongo_model;
    constructor(){
        this.mongo_model = mongoose.model("Product", productSchema, 'Products') 
    }

    async addNewProduct(productData) {
        
        const newProduct = new this.mongo_model(productData);

       await newProduct.save();
       
    };

    async checkProdExist (prodName){
        const check= await this.mongo_model.find({name:prodName})
        return check
    }

    async  productsList (){
        const allProducts = await this.mongo_model.find();

        return allProducts;

    }

    async productById (prodId){

        const product = await this.mongo_model.findById(prodId);
        
        return product;
    }

    async searchByName (prodName){

        const product = await this.mongo_model.find({name: {$regex:prodName}});
        return product;
    }
}

export default ProductModel;