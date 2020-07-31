const express = require('express');
const router = express.Router();
const { getCategories, getCategoriesAll,getUnaCategoria} = require("./../models/categoria");
const { getProducts, getProduct,getProductConCate} = require("./../models/producto");
const { getCervecerias } = require("./../models/cerveceriaModel");

router.get("/", async (req, res) => {
    res.render("tienda");
})

module.exports = router;