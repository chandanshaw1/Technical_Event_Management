const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const product = await Product.create({ ...req.body, vendorId: req.user.id });
  res.json(product);
});

router.get("/", async (req, res) => {
  res.json(await Product.find());
});

router.get("/vendor", auth, async (req, res) => {
  res.json(await Product.find({ vendorId: req.user.id }));
});

module.exports = router;
