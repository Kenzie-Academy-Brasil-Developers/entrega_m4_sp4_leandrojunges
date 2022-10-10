import createProductService from "../../services/product/createProduct.service";

const createProductController = async (request, response)=>{
    try {
        const product = request.body;
        const createdProduct = await createProductService(product);
        return response.status(201).json({ 
            message:'Product created',
            product:createdProduct})
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
        
    }
}
export default createProductController