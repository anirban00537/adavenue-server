const express = require("express");

const {
  createbrandsContent,
  deletebrandsPost,
  getbrandsContent,
} = require("../controllers/brands.js");

const router = express.Router();

router.get("/", getbrandsContent);
router.post("/", createbrandsContent);
router.delete("/:id", deletebrandsPost);
module.exports = router;
