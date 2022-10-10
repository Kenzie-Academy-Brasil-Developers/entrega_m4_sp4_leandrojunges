import database from "../../database";

const listProductCategoryService = async (id)=>{
    try {
        let res = await database.query(
            `SELECT 
            pr."name",
            pr.price,
            ct."name" AS category 
            FROM products pr 
            JOIN categories ct ON pr.category_id = ct.id
            WHERE ct.id = $1`,
            [id]
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}
export default listProductCategoryService;