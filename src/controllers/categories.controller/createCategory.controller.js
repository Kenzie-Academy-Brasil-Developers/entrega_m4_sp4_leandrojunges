import createCategoryService from "../../services/categories/createCategory.service"


const createCategoryController = async (request, response)=>{
    try {
        const category = request.body
        const createdCategory = await createCategoryService(category);
        return response.status(201).json({ 
            message:'Category created',
            category:createdCategory})

    } catch (error) {
        
        return response.status(400).json({
            message: error.message
        })
    }
}
export default createCategoryController