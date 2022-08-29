const expres = require('express');
const router = expres.Router();
const AuthController = require("../controllers/auth");

router.post("/signup",AuthController.signup);
router.get("/signout",AuthController.signout);
router.post("/signin",AuthController.signin);


module.exports = router;