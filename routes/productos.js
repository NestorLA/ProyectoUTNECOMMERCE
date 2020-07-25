const express = require('express');
const router = express.Router();
const serviceProducts = require('./../models/producto');
const {agregarItem} = require('./../models/carritoModel');

// productos/single/1
router.get('/single/:id', async (req,res)=> {
    const id = req.params.id; // obtenemos el id que llega mediante la URL
    const producto = await serviceProducts.getProduct(id);
    res.render('producto', {producto, precio_previo : producto.precio * 1.2});
})
router.post('/single/:id', async(req, res) => {
    const id = req.params.id; // obtenemos el id que llega mediante la URL
    const producto = await serviceProducts.getProduct(id);
    const {cantidad} = req.body;
    const precioFinal = producto.precio*cantidad;
    const object = {
    id_usuario: req.session.userId,
    precio: precioFinal,
    cantidad: cantidad,
    nombre_producto: producto.nombre
};
const result = await agregarItem(object);
res.redirect('/carrito');
})
// productos/all
router.get('/all', async(req,res)=> {

})
module.exports = router;