const express = require("express");

const logo = require("../controllers/logo.js");

const router = express.Router();

router.get("/", logo.getlogoContent);
router.post("/", logo.createlogoContent);
router.delete("/:id", logo.deletelogoPost);
module.exports = router;
