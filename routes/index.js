const express = require("express");
const router = express.Router();
const productoService = require("./../models/producto");
const { getCategories } = require("./../models/categoria");
router.get("/", async (req, res) => {
  const productos = await productoService.getProducts();
  const categorias = await getCategories();
  res.render("index", {
    title: "El Aguante",
    productos,
    categorias,
  });
});

module.exports = router;
