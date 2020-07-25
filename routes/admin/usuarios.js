const express = require("express");
const router = express.Router();
const {getUsuarios, updateAdmin, deletebyID} = require("./../../models/loginModel")
router.get("/", async (req, res) => {
    if(req.session.administrador){
    try {
      const usuarios = await getUsuarios();
      res.render("adminusers", { usuarios });
    } catch (error) {}
    }
    else{
      res.send("No tenes permisos para ingresar")
    }
  });
  router.get("/baja/:id", async (req, res) => {
    if(req.session.administrador){
    try {
      const { id } = req.params;
      const result = await deletebyID(id);
      res.redirect("/admin/usuarios");
    } catch (error) {
      console.log(error);
    }
    }
    else{
      res.send("no tenes permisos para ingresar")
    }
   
  });
  router.get("/cambiar/:id/:admin", async(req,res) => {
    if (req.session.administrador) {
        try{
        var { id, admin } = req.params;
        if(admin == 0){
          admin = 1;
          const result = await updateAdmin(id, admin);
        }
        else{
          admin = 0;
          const result = await updateAdmin(id,admin);
        }
        res.redirect("/admin/usuarios");
        }
        catch(error){
            console.log(error);
        }
    } 
    else {
    res.send("no tenes permisos para ingresar")    
    }
  });

  module.exports = router;