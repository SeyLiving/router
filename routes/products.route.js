const router = require("express").Router;
const {
  creatProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} = require("../controllers/products.controller");

const productRouter = router();

productRouter.get("/", getProducts);
productRouter.post("/", creatProduct);
productRouter.patch("/", updateProduct);
productRouter.delete("/", deleteProduct);

module.exports = productRouter;
