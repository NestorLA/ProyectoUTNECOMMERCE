const express = require('express');
const router = express.Router();
const {getCarrito, eliminarItem, eliminarCant, getProductoCarrito} = require('./../models/carritoModel');

router.get("/", async (req, res) => {
    try {
        if(req.session.iniciado == true){
        var carritoFinal = 0
        var id_usuario = req.session.userId;
        const carrito = await getCarrito(id_usuario);
        carrito.forEach(carrito => {
            carritoFinal = carritoFinal+carrito.precio;

        });
        console.log(carritoFinal);
        res.render("carrito", { carrito, carritoFinal });
        }
        else{
            res.send("Inicie sesion para ver el carrito");
        }
    } catch (error) {
        console.log(error);
    }
});
router.get("/baja/:id", async (req, res) => {
    try {
    if(req.session.iniciado == true){
      const { id } = req.params;
      const result = await eliminarItem(id);
      res.redirect("/carrito");
    }
    else{
        res.send("Inicie sesion para ver el carrito");
    }
    } catch (error) {
        console.log(error);
    }
    
   
  });
  router.get("/baja/cantidad/:id", async(req, res) => {
      try {
        if(req.session.iniciado == true){
            const {id} = req.params;
            const producto = await getProductoCarrito(id);
            var cantidadFinal = producto[0].cantidad-1;
            var precioFinal = (producto[0].precio/producto[0].cantidad)*cantidadFinal;
            const result = await eliminarCant(precioFinal, cantidadFinal, id);
            res.redirect("/carrito");
        }
        else{
            res.send("Inicie sesion para ver el carrito");
        }
      } catch (error) {
          console.log(error);
      }
  });

module.exports = router;