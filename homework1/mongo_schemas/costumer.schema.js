import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
    street:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    zip:{
        type:Number
    }

})

const costumerSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:[addressSchema]

})

export default costumerSchema;