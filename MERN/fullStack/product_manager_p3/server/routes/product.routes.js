const ProductController = require('../controllers/product.controller');


module.exports = (app) =>{
    app.get('/api/hello', ProductController.helloWorld)
    app.get("/api/products", ProductController.findAllProducts)
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.getOneProduct)
    app.put("/api/products/:id", ProductController.updateOneProduct)
    app.delete("/api/products/:id", ProductController.deleteOneProduct)
}