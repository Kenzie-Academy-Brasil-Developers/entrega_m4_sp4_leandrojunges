import updateProductService from "../../services/product/updateProduct.service";


const updateProductController = async (request, response) =>{
    try {
         const id = request.params.id;
         const product = request.body;

         const updatedProduct = await updateProductService(id, product);

         return response.status(200).json({ 
            message:'Product updated',
            product :updatedProduct})


    } catch (error) {

        return response.status(400).json({
            message: error.message,
        })
        
    }
}

export default updateProductController