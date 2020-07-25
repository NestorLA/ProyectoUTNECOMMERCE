const pool = require("../utils/bd");
const logueado = async(usuario, pass) => {
    try{
    const query = "SELECT * FROM ?? WHERE usuario = ? AND password = ?"
    const params = [process.env.TABLA_USUARIO, usuario, pass];
    return await pool.query(query, params);
    }
    catch(error){
        console.log(error)
    }
};
getUsuarios = async() => {
    try {
        const query = "SELECT * from ??"
        const params = [process.env.TABLA_USUARIO]
        const rows = await pool.query(query, params);
        return rows;
    } catch (error) {
        console.log(error)
    }
}
const deletebyID = async (id_usuario) => {
    const query = "DELETE FROM ?? where id = ?";
    const params = [process.env.TABLA_USUARIO, id_usuario];
    return await pool.query(query, params);
  };
const updateAdmin = async(id_usuario, admin) => {
    const query = "UPDATE ?? SET usuario.admin = ? WHERE id = ?"
    const params = [process.env.TABLA_USUARIO, admin, id_usuario];
    return await pool.query(query,params);
}
const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.TABLA_USUARIO, obj];
    const rows = await pool.query(query, params);
    return rows.insertId;
  };
module.exports = {
    logueado,
    getUsuarios,
    deletebyID,
    updateAdmin,
    create
}