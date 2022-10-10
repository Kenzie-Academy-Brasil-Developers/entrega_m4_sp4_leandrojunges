import listProductCategoryService from "../../services/product/listProducCategory.service";

const listProducCategoryController = async (request, response) =>{
        try {
            const id = request.params.id
       
            const listProducCategory = await listProductCategoryService(id) 

            return response.json(listProducCategory)

        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
}
export default listProducCategoryController