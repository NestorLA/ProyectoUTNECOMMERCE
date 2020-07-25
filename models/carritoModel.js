const pool = require("../utils/bd");

getCarrito = async(id_usuario) => {
    try {
        const query = "SELECT * FROM ?? WHERE id_usuario = ?";
        const params = [process.env.TABLA_CARRITO, id_usuario];
        const rows = await pool.query(query, params);
        return rows;
    } catch (error) {
        console.log(error)
    }
}
const agregarItem = async(obj) => {
    try {
        const query = "INSERT INTO ?? SET ?"
        const params = [process.env.TABLA_CARRITO, obj]
        return await pool.query(query,params)
    } catch (error) {
        console.log(error);
    }

};
const eliminarItem = async (id) => {
    const query = "DELETE FROM ?? where id = ?";
    const params = [process.env.TABLA_CARRITO, id];
    return await pool.query(query, params);
};
const eliminarCant = async(precio, cantidad, id) => {
    const query = "UPDATE ?? SET precio = ? cantidad = ? WHERE id = ?"
    const params = [process.env.TABLA_CARRITO, precio, cantidad, id];
    return await pool.query(query, params);
}
getProductoCarrito = async(id) => {
    try {
        const query = "SELECT * FROM ?? WHERE id = ?";
        const params = [process.env.TABLA_CARRITO, id];
        const rows = await pool.query(query, params);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    agregarItem,
    eliminarItem,
    getCarrito,
    eliminarCant,
    getProductoCarrito
}