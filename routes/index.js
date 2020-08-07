const express = require("express");
const router = express.Router();
const productoService = require("./../models/producto");
const { getCategories } = require("./../models/categoria");
router.get("/", async (req, res) => {
  res.render("index", {
    title: "El Aguante"
  });
});

module.exports = router;
