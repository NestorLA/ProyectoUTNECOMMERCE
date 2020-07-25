const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getCervecerias } = require("./../../models/cerveceriaModel");

router.get("/", async (req, res) => {
    if(req.session.administrador){
    try {
      const cervecerias = await getCervecerias();
      res.render("admincervecerias", { cervecerias });
    } catch (error) {}
    }
    else{
      res.send("No tenes permisos para ingresar")
    }
  });
  /* Publicar productos */

  router.get("/alta", async (req, res) => {
    if(req.session.administrador){
    const categorias = await getCervecerias();
    res.render("altacerveceria", { cervecerias }); // cervecerias
    }
    else{
      res.send("no tenes permisos para ingresar")
    }
  });
  
  module.exports = router;
  