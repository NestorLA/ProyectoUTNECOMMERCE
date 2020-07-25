const pool = require('./../utils/bd');

getCategories = async () => {
    try {
        const query = "select id_categoria, categoria from categoria order by id_categoria desc LIMIT 5 ";
        const rows = await pool.query(query);
        return rows;
    } catch ( error ){
        console.log(error)
    }
}

putCategories = async () => {
  try {
    const query = "INSERT INTO ?? SET ?";
    // obj debe tener como propiedades del objeto los campos de la tabla
    const params = [process.env.TABLA_CATEGORIA, obj];
    const rows = await pool.query(query, params);
    return rows.insertId; // insertId -> id del ultimo elemento creado
  } catch ( error ) {
      console.log(error)
  }
  
}
module.exports = {
    getCategories,
    putCategories
}