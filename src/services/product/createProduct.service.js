import database from "../../database";

const createProductService = async(product) =>{

    try {
        if(product.name === undefined || product.price === undefined){
            throw new Error('Product not create')
        }
        const res = await database.query(
            `INSERT INTO 
                products(name, price, category_id)
            VALUES
            ($1, $2, $3)
            RETURNING *;
             `,
             [product.name, product.price, product.category_id]
        )
      
        return res.rows[0]
        
    } catch (error) {
        throw new Error(error)
    }

}

export default createProductService