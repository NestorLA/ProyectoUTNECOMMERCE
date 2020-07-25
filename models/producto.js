const pool = require("../utils/bd"); // importamos la referencia de la conexion
getProducts = async () => {
  try {
    // consultas
    const query =
      "SELECT producto.id_producto, producto.nombre, producto.id_cerveceria,producto.id_categoria,producto.volumen,producto.precio,producto.imagen,producto.stock, categoria.categoria as nombre_categoria  FROM ?? JOIN ?? ON producto.id_categoria = categoria.id_categoria where estado = 1 order by id_producto desc";
    const rows = await pool.query(query, [
      process.env.TABLA_PRODUCTO,
      process.env.TABLA_CATEGORIA,
    ]);
    // SELECT p.id, p.nombre, p.descripcion, p.precio, p.imagen , c.nombre, c.descripcion from producto  as p join categoria_principal as c on p.id_categoria = c.id
    return rows;
  } catch (error) {
    console.log(error);
  }
};

getProduct = async (id_producto) => {
  try {
    const query =
      "SELECT id_producto, nombre, id_cerveceria ,id_categoria, volumen, precio , imagen FROM ?? WHERE id_producto = ?";
    const params = [process.env.TABLA_PRODUCTO, id_producto];
    const rows = await pool.query(query, params);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

getProductConCate= async (id_producto)=>{
  try {
    const query=
      "SELECT producto.id_producto, producto.nombre, producto.id_cerveceria, producto.id_categoria, producto.volumen, producto.precio, producto.imagen,producto.stock,categoria.categoria catenom FROM ?? INNER JOIN ?? ON producto.id_categoria=categoria.id_categoria where producto.id_producto = ?"
    const rows=await pool.query(query,[
      process.env.TABLA_PRODUCTO,
      process.env.TABLA_CATEGORIAS,
      id_producto]);
    return rows[0];  

  }catch (error){
    console.log(error);
  }
   
};
const update = async (id_producto, obj) => {
  console.log("Se actualizara el id : ", id_producto);
  console.log(obj);
  const query = "UPDATE ?? SET ? where id_producto = ?";
  const params = [process.env.TABLA_PRODUCTO, obj, id_producto];
  return await pool.query(query, params);
};

const create = async (obj) => {
  // SET -> Se usa cuando se envia un objeto como parametro (campos) values()
  const query = "INSERT INTO ?? SET ?";
  // obj debe tener como propiedades del objeto los campos de la tabla
  const params = [process.env.TABLA_PRODUCTO, obj];
  const rows = await pool.query(query, params);
  return rows.insertId; // insertId -> id del ultimo elemento creado
};
module.exports = {
  getProducts,
  getProduct,
  getProductConCate,
  create,
  update,
};
