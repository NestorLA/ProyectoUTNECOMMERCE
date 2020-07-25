const express = require("express");
const session = require("express-session");
const router = express.Router();
const { getProducts, create, update } = require("./../../models/producto");
const { getCategories } = require("./../../models/categoria");
const { getCervecerias } = require("./../../models/cerveceriaModel");
const imgHandler = require("./../../utils/imageHandler");
const multer = require("multer");
const { saveImage } = require("../../utils/imageHandler");
const config = { dest: "./public/tmp" }; // si no está creada -> multer la crea
const upload = multer(config);

router.get("/baja/:id", async (req, res) => {
  if(req.session.administrador){
  try {
    const { id } = req.params;
    const result = await update(id, { estado: 0 });
    res.redirect("/admin/productos");
  } catch (error) {}
  }
  else{
    res.send("no tenes permisos para ingresar")
  }
 
});

/* /admin/productos/alta */

router.get("/alta", async (req, res) => {
  if(req.session.administrador){
  const cervecerias = await getCervecerias();
  const categorias = await getCategories();
  res.render("altaproducto", { cervecerias, categorias }); // categorias
  }
  else{
    res.send("no tenes permisos para ingresar")
  }
});

router.post("/alta", upload.single("imagen"), async (req, res) => {
  try {
    const { nombre, id_cerveceria, id_categoria, volumen, precio, imagen, stock, descuento } = req.body;
    const img = imgHandler.saveImage(req.file);
    const object = {
      nombre: nombre,
      id_cerveceria : parseInt(id_cerveceria),
      id_categoria: parseInt(id_categoria),
      volumen : volumen,
      precio: precio,
      imagen: img,
      stock : stock,
      descuento: descuento,
    };
    const result = await create(object);
    console.log(`El insert id retornado es : ${result}`);
    res.render("altaproducto", { message: "Producto dado de alta" });
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
