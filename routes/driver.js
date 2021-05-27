const express = require("express");

const {
  createdriverContent,
  deletedriverPost,
  getdriverContent,
} = require("../controllers/driver.js");

const router = express.Router();

router.get("/", getdriverContent);
router.post("/", createdriverContent);
router.delete("/:id", deletedriverPost);
module.exports = router;
