import listProductService from "../../services/product/listProduct.service";

const listProductController = async(request, response)=>{
    try {
        const products = await listProductService()
        return response.json(products)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}

export default listProductController