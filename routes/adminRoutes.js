const router = require("express").Router();
const Vendor = require("../models/Vendor");
const User = require("../models/User");

router.get("/users", async (req, res) => {
  res.json(await User.find());
});

router.get("/vendors", async (req, res) => {
  res.json(await Vendor.find());
});

router.put("/vendor/:id", async (req, res) => {
  res.json(await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

module.exports = router;
