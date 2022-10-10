import listCategoriesService from "../../services/categories/listCategories.service"


const listCategoriesController = async(request,response)=>{
    try {
        const categorieslist = await listCategoriesService()
        return response.status(200).json(categorieslist)
        
    } catch (error) {
        return response.status(400).json({
            message: error.message
          })
    }
}

export default listCategoriesController