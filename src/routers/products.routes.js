import { Router } from "express";
import createProductController from "../controllers/product.controller/createProduct.controller";
import deleteProductController from "../controllers/product.controller/deleteProduct.controller";
import listProductController from "../controllers/product.controller/listProduct.controller";
import listProducCategoryController from "../controllers/product.controller/listProductCategory.controller";
import productDataController from "../controllers/product.controller/productData.controller";
import updateProductController from "../controllers/product.controller/updateProduct.controller";



const productRoutes = Router()

productRoutes.post('', createProductController)
productRoutes.get('', listProductController)
productRoutes.get('/:id', productDataController)
productRoutes.patch('/:id', updateProductController)
productRoutes.delete('/:id', deleteProductController)
productRoutes.get('/category/:id', listProducCategoryController)



export default productRoutes