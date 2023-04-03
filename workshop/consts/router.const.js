import { Router } from "express";
import productRouter from "../routes/product.routes.js";
import cartRouter from "../routes/cart.routes.js";
const router = Router();


router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use('/products', productRouter);
router.use('/cart', cartRouter)

export default router;