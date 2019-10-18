const express =  require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get("/products/detail/:id", ProductController.show);
routes.post("/products/new", ProductController.store);
routes.put("/products/edit/:id", ProductController.update);
routes.delete("/products/remove/:id", ProductController.destroy);

module.exports = routes;