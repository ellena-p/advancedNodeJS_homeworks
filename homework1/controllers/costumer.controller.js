import CostumerModel from "../models/costumer.model.js";

const costumerModel = new CostumerModel();

class CostumerCotroller{

    async getAllCostumers(req,res){
        try {
            const costumers = await costumerModel.getAllCostumers();
            res.send(costumers)
        } catch (error) {
            res.sendStatus(404)
        }
       
    }

    async addCostumer(req,res){
        try {
            const {name, email,phone, address}= req.body;

            const costumerData = {
                name: name,
                email:email,
                phone:phone,
                address: address
            }

            await costumerModel.addCostumer(costumerData)

            res.send({message:`Costumer with name ${name} was added`})
        } catch (error) {
            res.status(404).send("Error occured")
        }
    }

    
}

export default CostumerCotroller;