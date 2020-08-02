const express = require("express");
const session = require("express-session");
const router = express.Router();
const imgHandler = require("./../../utils/imageHandler");
const multer = require("multer");
const config = { dest: "./public/tmp" }; // si no está creada -> multer la crea
const upload = multer(config);
const { getProducts, create, update, getProduct, getProductConCate } = require("./../../models/producto");
const { getCategories, getCategoriesAll } = require("./../../models/categoria");
const { getCervecerias } = require("./../../models/cerveceriaModel");
const { saveImage } = require("../../utils/imageHandler");

// router.get("/baja/:id_producto", async (req, res) => {
//   if(req.session.administrador){
//   try {
//     const { id_producto } = req.params;
//     const result = await update(id_producto, { estado: 0 });
//     res.redirect("/admin/productos");
//   } catch (error) {}
//   }
//   else{
//     res.send("No tenés permisos para ingresar")
//   }
 
// });

router.put("/baja/:id_producto", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({ status: true });
});

// router.get("/modi/:id",async(req,res)=>{
//   if(req.session.administrador){
//     const { id_producto } = req.params;
//     console.log(`vale2 ${req.body}`);
//     const categorias = await getCategoriesAll();
//     // const productomodi=await getProduct(id); lo cambie por el join getProductConCate, funca
//     const productomodi=await getProductConCate(id_producto);
//     // const catvino=productomodi.id_categoria;
//     // console.log(`vale3 ${catvino}`);
//     console.log(` vale ${id_producto}`);
//     res.render("modiproducto",{ productomodi,categorias });
//     // res.render("modiproducto",{ categorias },{ productomodi });
//     // res.render("altaproducto", { categorias }); // categorias
//     }
//     else{
//       res.send("no tenes permisos para ingresar")
//     }

// });

router.get("/modi/:id_producto" , async (req,res) => {

  const { id_producto } = req.params;
  const productoModi= await getProduct(id_producto);
  const cervecerias = await getCervecerias();
  const categorias = await getCategoriesAll(); 
  res.render("modiproducto",{productoModi, cervecerias, categorias});

});

// router.post("/modificar/:id", async (req, res) => {
//   try {
//     const{id_producto}=req.params;
//     const { nombre, id_cerveceria, id_categoria, volumen, precio, stock, descuento } = req.body;
//     // console.log(`Ok req.body`);
//    // console.log(`La imagen se guardo como ${img}`);
//     const object = {
//       nombre: nombre,
//       id_cerveceria: parseInt(id_cerveceria),
//       id_categoria: parseInt(id_categoria),
//       volumen:volumen,
//       precio: precio,
//       stock:stock,
//       descuento: descuento,
//     };
//     const result = await update(id_producto,object);
//     // console.log(`El insert id retornado es : ${result}`);
//     // res.render("altaproducto", { message: "Producto dado de alta" });
//     res.redirect("/admin/productos");
//   } catch (error) {
//     console.log(error);
//     // error.hbs
//   }
// });

router.post("/modificar/:id", async(req,res)=>{
	try{

	//const { id_categoria }= req.params;
	const { id_producto, nombre,id_cerveceria,id_categoria,volumen,precio,stock,descuento }=req.body;
		const obj= { 
      nombre: nombre,
      id_cerveceria: parseInt(id_cerveceria),
      id_categoria: parseInt(id_categoria),
      volumen:volumen,
      precio: precio,
      stock:stock,
      descuento: descuento,
    };	
        console.log(`nestor:D:D:D el objeto es ${obj}`);
        console.log(`nestor:D:D:D el id es ${id_producto}`);
		const result=await update(id_producto,obj);
		res.json({success:true});
	} catch (error){
    
    console.log(error);
		res.json({success:false});
	}	
  
  res.redirect("admin/productos");
});

/* /admin/productos/alta */

router.get("/alta", async (req, res) => {
  if(req.session.administrador){
  const cervecerias = await getCervecerias();
  const categorias = await getCategoriesAll();
  res.render("altaproducto", { cervecerias, categorias });
  }
  else{
    res.send("No tenes permisos para ingresar")
  }
});

router.post("/alta", upload.single("imagen"), async (req, res) => {
  console.log(req.body);
  try {
    const { nombre, descripcion, id_cerveceria, id_categoria, volumen, precio, imagen, stock } = req.body;
    //console.log(`ok ${req.body}`);
    const img = imgHandler.saveImage(req.file);
    console.log(`La imagen se guardo como ${img}`);
    const object = {
      nombre: nombre,
      descripcion: descripcion,
      id_cerveceria : parseInt(id_cerveceria),
      id_categoria: parseInt(id_categoria),
      volumen : volumen,
      precio: precio,
      imagen: img,
      stock : stock,
    };
    console.log(object);
    const result = await create(object);
    console.log("El insert id retornado es:");
    console.log(result);
    res.redirect("/admin/productos/alta");
  } catch (error) {
    console.log(error);
    // error.hbs
  }
});

/* Cargar todos los productos en la página */
router.get("/", async (req, res) => {
  if(req.session.administrador){
  try {
    const productos = await getProducts();
    res.render("adminprods", { productos });
  } catch (error) {}
  }
  else{
    res.send("No tenes permisos para ingresar")
  }
});
/* Publicar productos */

module.exports = router;
