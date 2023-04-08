import mongoose from "mongoose";
import costumerSchema from "../mongo_schemas/costumer.schema.js";

class CostumerModel {
    
    mongo_model;
 
    constructor(){

        this.mongo_model = mongoose.model("Costumer", costumerSchema) 
        
    }

    async getAllCostumers(){
        const costumers = await this.mongo_model.find();

        return costumers;
    }

    async addCostumer(costumerData){
        const costumer = await this.mongo_model(costumerData);

        await costumer.save();
    }
}

export default CostumerModel;