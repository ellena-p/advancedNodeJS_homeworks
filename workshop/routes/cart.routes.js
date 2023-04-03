import { Router } from "express";

import CartController from "../controllers/cart.controller.js";

const cartRouter = new Router();

const cartController = new CartController();

cartRouter.post("/", cartController.addProductToCart)

cartRouter.get ("/", cartController.allCarts);

export default cartRouter;