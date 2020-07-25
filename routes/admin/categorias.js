const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getCategories, putCategories } = require("../../models/categoria");

router.get("/", async (req, res) => {
    if(req.session.administrador){
    try {
      const categorias = await getCategories();
      res.render("admincategs", { categorias });
    } catch (error) {}
    }
    else{
      res.send("No tenes permisos para ingresar")
    }
  });
  /* Publicar productos */

  router.get("/alta", async (req, res) => {
    if(req.session.administrador){
    const categorias = await getCategories();
    res.render("altacategoria", { categorias }); // categorias
    }
    else{
      res.send("no tenes permisos para ingresar")
    }
  });
  
  module.exports = router;
  