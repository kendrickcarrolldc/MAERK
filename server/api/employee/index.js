var express = require("express");
var router = express.Router();
var controller = require("./employee.controller.js");
import * as auth from '../../auth/auth.service';
//Restart Database



router.get("/", auth.hasRole('admin'), controller.index);
router.get("/:id", auth.isAuthenticated(), controller.show);
//router.post("/:id",controller.save);
router.post("/", auth.isAuthenticated(), controller.create);
router.post("/:id", auth.isAuthenticated(), controller.update);



module.exports = router;