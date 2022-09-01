const getProducts = (req, res) => {
  res.status(200).send("Welcome to my second server");
};

const creatProduct = (req, res) => {
  res.status(201).send("Product has been created.");
};

const updateProduct = (req, res) => {
  res.status(200).send("Product has been updated.");
};

const deleteProduct = (req, res) => {
  res.status(200).send("Product has been deleted.");
};

module.exports = {
  getProducts,
  creatProduct,
  updateProduct,
  deleteProduct,
};
