var express = require("express");
var router = express.Router();
var controller = require("./employee.controller.js");
//Restart Database



router.get("/",controller.index);
router.get("/:id",controller.show);
//router.post("/:id",controller.save);
router.post("/",controller.create);
router.post("/:id",controller.update);



module.exports = router;