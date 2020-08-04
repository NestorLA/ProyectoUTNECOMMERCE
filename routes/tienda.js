const express = require('express');
const router = express.Router();
const { getCategories, getCategoriesAll,getUnaCategoria} = require("./../models/categoria");
const { getProducts, getProduct,getProductConCate , getTwelveProducts} = require("./../models/producto");
const { getCervecerias } = require("./../models/cerveceriaModel");
const { agregarItem } = require("./../models/carritoModel");

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  router.get('/single/:id_producto', async (req,res)=> {
    const id = req.params.id_producto; // obtenemos el id que llega mediante la URL
    const producto = await getProduct(id);
    res.render('producto', {producto});
})
router.post('/single/:id_producto', async(req, res) => {
    const id = req.params.id_producto; // obtenemos el id que llega mediante la URL
    const producto = await getProduct(id);
    const {cantidad} = req.body;
    const precio = producto.precio;
    const nombre = producto.nombre;
    const object = {
    id_usuario: req.session.userId,
    precio: precio,
    cantidad: cantidad,
    nombre_producto: producto.nombre,
    id_producto: producto.id_producto,
};
console.log("EL POST QUE SE MANDA ES: " + object);
const result = await agregarItem(object);
res.redirect('/carrito');
})


router.get("/", async (req, res) => {
    try {
        const productos = await getProducts();
        const categorias = await getCategories();
        const categoriasAll = await getCategoriesAll();
        const cervecerias = await getCervecerias();
        res.render("tienda", { productos, categorias, categoriasAll, cervecerias });
      } catch (error) {}
})

module.exports = router;