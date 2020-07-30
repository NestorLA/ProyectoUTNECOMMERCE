const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getCategories, getCategoriesAll, update, create, getUnaCategoria } = require("../../models/categoria");

router.get("/modi/:id_categoria" , async (req,res) => {

  const { id_categoria } = req.params;
  const categoriaModi= await getUnaCategoria(id_categoria);
  res.render("modicategoria",{categoriaModi});

});

router.post("/modificar/:id", async(req,res)=>{
	try{

	//const { id_categoria }= req.params;
	const { id_categoria, categoria }=req.body;
		const obj= { 
      id_categoria : id_categoria,
      categoria : categoria
    };	
        console.log(`nestor:D:D:D el objeto es ${obj}`);
        console.log(`nestor:D:D:D el id es ${id_categoria}`);
		const result=await update(id_categoria,obj);
		res.json({success:true});
	} catch (error){
	
		console.log(error);
		res.json({success:false});
	}	

});

router.get("/alta", async (req, res) => {
  if(req.session.administrador){
  const categorias = await getCategoriesAll();
  res.render("altacategoria", { categorias }); // categorias
  }
  else{
    res.send("No tenés permisos para ingresar")
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
      const categorias = await getCategoriesAll();
      console.log(categorias);
      res.render("admincategs", { categorias });
    } catch (error) {}
    }
    else{
      res.send("No tenés permisos para ingresar")
    }
  });
  /* Publicar productos */

  module.exports = router;
  