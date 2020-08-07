const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getCervecerias, create, deleteCerve } = require("./../../models/cerveceriaModel");

router.get("/baja/:id_cerveceria", async (req, res) => {
  if(req.session.administrador){
  try {
    const { id_cerveceria} = req.params;
    const result = await deleteCerve(id_cerveceria);
    res.redirect("/admin/cervecerias");
  } catch (error) {}
  }
  else{
    res.render("error");
  }
 
});

router.get("/alta", async (req, res) => {
  if(req.session.administrador){
    const cervecerias = await getCervecerias();
    res.render("altacerveceria", { cervecerias }); // cervecerias
  }
  else{
    res.render("error");
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
      res.render("error");
    }
  });

module.exports = router;
