const { appDataSource } = require("./dbconfig");

const nutrientsDetails = async (nutrientsId) =>{
    try{
        return await appDataSource.query(
        `SELECT
                nutrients.name,
                nutrients.price,
                nutrients.nutrientsTypes.id
                nutrients.img_url
        FROM nutrients
        JOIN nutrientsType ON nutrientsType.id = 
        `
        )
    }
    
}