import updateCategoryService from "../../services/categories/updateCategory.service"


const updateCategoryController = async (request, response) =>{
    try {
        const id = request.params.id
        const category = request.body

        const updatedCategory = await updateCategoryService(category, id)
        return response.status(200).json({ 
            message:'Category updated',
            category:updatedCategory})

    } catch (error) {
     return response.status(400).json({
        message: error.message,
     })
    }
}

export default updateCategoryController