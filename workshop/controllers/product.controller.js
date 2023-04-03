import ProductModel from "../models/product.model.js";

const productModel = new ProductModel();
class ProductsController {
  async addNewProduct(req, res) {
    const { name, description, price, reviews } = req.body;

    const productData = {
      name: name,
      description: description,
      price: price,
      reviews: reviews,
    };

    const checkName = await productModel.checkProdExist(name);

    if (checkName) {
      res.send({message:`Product with name ${name} already exists.`});
    } else {
      await productModel.addNewProduct(productData);

      res.status(201).send({ message: "New product is created." });
    }
  }

  async productsList(req, res) {
    const allProducts = await productModel.productsList();
    res.send(allProducts);
  }

  async productById(req, res) {
    const id = req.params.id;
    const product = await productModel.productById(id);

    res.send(product);
  }

  async searchByName(req, res) {
    const { name } = req.body;
    try {
      const product = await productModel.searchByName(name);
      res.send(product);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }
}

export default ProductsController;
