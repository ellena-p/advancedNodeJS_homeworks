import { Router } from "express";
import CostumerCotroller from "../controllers/costumer.controller.js";

const costumerRouter = new Router();

const costumerController = new CostumerCotroller();

costumerRouter.get ("/", costumerController.getAllCostumers);
costumerRouter.post("/", costumerController.addCostumer);;

export default costumerRouter;