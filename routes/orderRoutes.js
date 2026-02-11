const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");

router.post("/checkout", auth, async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    items: req.body.items,
    totalAmount: req.body.total
  });
  res.json(order);
});

router.get("/user", auth, async (req, res) => {
  res.json(await Order.find({ userId: req.user.id }));
});

module.exports = router;
