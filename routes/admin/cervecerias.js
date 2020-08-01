const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getCervecerias, create } = require("./../../models/cerveceriaModel");

router.get("/alta", async (req, res) => {
  if(req.session.administrador){
    const cervecerias = await getCervecerias();
    res.render("altacerveceria", { cervecerias }); // cervecerias
  }
  else{
    res.send("no tenes permisos para ingresar")
  }
});

router.post("/alta", async (req,res)=>{
  try{
    const obj=({nombre,descripcion}=req.body);
    console.log(obj);
    const result = await create(obj);
    // console.log(result);
    res.json({success:true});
    
  }catch(error){
    console.log(error);
    res.json({success:false});
    
  }
});

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

module.exports = router;
