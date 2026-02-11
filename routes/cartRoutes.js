const router = require("express").Router();
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");

router.post("/add", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  cart.items.push(req.body);
  await cart.save();
  res.json(cart);
});

router.get("/", auth, async (req, res) => {
  res.json(await Cart.findOne({ userId: req.user.id }));
});

module.exports = router;
