const express = require("express");
const router = express.Router();


router.get("/", async(req,res) => {
    if(req.session.administrador) {
    try {
        res.render("indexAdmin");
      } catch (error) {
          console.log(error);
      }} else {
        res.render("error");
      }
});

module.exports = router;