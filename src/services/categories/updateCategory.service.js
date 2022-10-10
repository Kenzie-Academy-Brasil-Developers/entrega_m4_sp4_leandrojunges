import database from "../../database";

const updateCategoryService = async (category, id)=>{
    try{
    const res = await database.query(
        `UPDATE categories SET name = $1 WHERE id = $2 RETURNING * ;`,
        [category, id]
    )
    if(res.rowCount === 0){
        throw new Error('Category not found')
    }
    
    return res.rows[0]
    }catch(error){
        throw new Error(error)
    }
}

export default updateCategoryService