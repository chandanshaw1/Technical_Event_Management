const router = require("express").Router();
const c = require("../controllers/authController");

router.post("/user/signup", c.userSignup);
router.post("/user/login", c.userLogin);
router.post("/vendor/signup", c.vendorSignup);
router.post("/vendor/login", c.vendorLogin);
router.post("/admin/login", c.adminLogin);
router.post("/admin/signup", c.adminSignup);

module.exports = router;
