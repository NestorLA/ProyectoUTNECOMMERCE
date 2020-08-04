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
const eliminarItem = async (id_carrito) => {
    const query = "DELETE FROM ?? where id_carrito = ?";
    const params = [process.env.TABLA_CARRITO, id_carrito];
    return await pool.query(query, params);
};
const eliminarCant = async(precio, cantidad, id_carrito) => {
    const query = "UPDATE ?? SET precio = ? cantidad = ? WHERE id_carrito = ?"
    const params = [process.env.TABLA_CARRITO, precio, cantidad, id_carrito];
    return await pool.query(query, params);
}
getProductoCarrito = async(id_carrito) => {
    try {
        const query = "SELECT * FROM ?? WHERE id_carrito = ?";
        const params = [process.env.TABLA_CARRITO, id_carrito];
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