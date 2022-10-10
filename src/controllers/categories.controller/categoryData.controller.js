import categoryDataService from "../../services/categories/categoryData.service";


const categoryDataController = async (request, response) =>{
    try {
        const id = request.params.id;

       const category = await categoryDataService(id)
        return response.status(200).json(category)

    } catch (error) {

        return response.status(400).json({
            message: error.message,
        })
        
    }
}

export default categoryDataController