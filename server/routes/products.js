module.exports = (app) => {
  app.route("/products").post(app.apis.products.getProductsBySearch);
};
