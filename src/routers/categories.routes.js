import { Router } from "express";
import categoryDataController from "../controllers/categories.controller/categoryData.controller";
import createCategoryController from "../controllers/categories.controller/createCategory.controller";
import deleteCategoryController from "../controllers/categories.controller/deleteCategory.controller";
import listCategoriesController from "../controllers/categories.controller/listCategories.controller";
import updateCategoryController from "../controllers/categories.controller/updateCategory.controller";

const categoryRoutes = Router();

categoryRoutes.post('', createCategoryController);
categoryRoutes.get('', listCategoriesController);
categoryRoutes.get('/:id', categoryDataController);
categoryRoutes.patch('/:id', updateCategoryController);
categoryRoutes.delete('/:id', deleteCategoryController);

export default categoryRoutes