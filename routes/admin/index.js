const express = require("express");
const router = express.Router();


router.get("/", async(req,res) => {
    try {
        res.render("indexAdmin");
      } catch (error) {
          console.log(error);
      }
});

module.exports = router;