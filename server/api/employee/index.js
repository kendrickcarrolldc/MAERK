var express = require("express");
var router = express.Router();
var controller = require("./note.controller.js");
//Restart Database



router.get("/",controller.getList);
router.post("/:id",controller.save);
router.post("/",controller.save);


module.exports = router;