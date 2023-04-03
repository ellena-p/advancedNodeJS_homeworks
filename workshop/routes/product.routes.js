import { Router } from "express";

import ProductsController from "../controllers/product.controller.js";

const productRouter = Router();

const productController = new ProductsController();

productRouter.post("/", productController.addNewProduct);

productRouter.get ("/", productController.productsList);

productRouter.get ("/:id", productController.productById);

productRouter.post("/search", productController.searchByName);

export default productRouter;