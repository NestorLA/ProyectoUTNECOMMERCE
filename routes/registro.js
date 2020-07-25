const express = require("express");
const router = express.Router();
const {create} = require("./../models/loginModel");


router.get("/", async(req,res) => {
    try {
        res.render("registro");
      } catch (error) {
          console.log(error);
      }
});
router.post("/", async(req,res) =>{
    try{
        const { usuario, nombre, apellido, correo, pass } = req.body;
        const object = {
            usuario: usuario,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            password: pass,
        };
        const result = await create(object);
        res.redirect("/login")
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;