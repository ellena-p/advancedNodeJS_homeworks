import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({

    productsInCart:[{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
})

export default cartSchema;