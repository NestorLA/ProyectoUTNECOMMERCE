const express = require('express');
const router = express.Router();
const { getCategories, getCategoriesAll,getUnaCategoria} = require("./../models/categoria");
const { getProducts, getProduct,getProductConCate , getSixProducts} = require("./../models/producto");
const { getCervecerias } = require("./../models/cerveceriaModel");

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

router.get("/", async (req, res) => {
    try {
        const productos = await getSixProducts();
        const categorias = await getCategories();
        const categoriasAll = await getCategoriesAll();
        const cervecerias = await getCervecerias();
        res.render("tienda", { productos, categorias, categoriasAll, cervecerias });
      } catch (error) {}
})

module.exports = router;