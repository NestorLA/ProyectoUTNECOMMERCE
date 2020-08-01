const pool = require('./../utils/bd');

getCategories = async () => {
    try {
        const query = "select id_categoria, categoria from categoria order by categoria LIMIT 7 ";
        const rows = await pool.query(query);
        console.log(rows);
        return rows;
    } catch ( error ){
        console.log(error)
    }
}

getCategoriesAll = async () => {
    try {
        const query = "select id_categoria,categoria from ?? order by categoria";
        const params=[process.env.TABLA_CATEGORIA];
        const rows = await pool.query(query,params);
        return rows;
    } catch ( error ){
        console.log(error)
    }
};
getUnaCategoria = async (id_categoria) => {
    try {
        const query = "select id_categoria,categoria from ?? where id_categoria = ? ";
        const params=[process.env.TABLA_CATEGORIA,id_categoria];
        const rows = await pool.query(query,params);
        return rows[0];
    } catch ( error ){
        console.log(error)
    }

};

const update=async(id_categoria,obj)=>{
    console.log("Se actualizara el id:",id_categoria);
    console.log(obj);
    const query= "UPDATE ?? SET ? where id_categoria = ?";
    const params=[process.env.TABLA_CATEGORIA,obj,id_categoria];
    return await pool.query(query,params);
    
};
const create=async(obj)=>{
    const query="INSERT INTO ?? SET ?";
    const params=[process.env.TABLA_CATEGORIA,obj];
    const rows=await pool.query(query,params);
    return rows.insertId;
};

const deleteCate = async (id_categoria)=>{
    const query = "DELETE FROM ?? where id_categoria = ?";
    const params = [process.env.TABLA_CATEGORIA, id_categoria];
    return await pool.query(query, params);
  };


module.exports = {
    getCategories,
    getCategoriesAll,
    getUnaCategoria,
    update,
    create,
    deleteCate
}