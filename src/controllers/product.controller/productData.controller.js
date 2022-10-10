import productDataService from "../../services/product/productData.service";



const productDataController = async(request, response)=>{
    try {
        const id = request.params.id;
        const product = await productDataService(id)
        return response.status(200).json(product)
    } catch (error) {

        return response.status(400).json({
            message: error.message
        })
        
    }
}

export default productDataController