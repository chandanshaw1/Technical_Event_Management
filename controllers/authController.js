const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Vendor = require("../models/Vendor");
const Admin = require("../models/Admin");

const generateToken = (data) =>
  jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" });

exports.userSignup = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ ...req.body, password: hashed });
  res.json(user);
};

exports.userLogin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  res.json({ token: generateToken({ id: user._id, role: "user" }) });
};

exports.vendorSignup = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const vendor = await Vendor.create({ ...req.body, password: hashed });
  res.json(vendor);
};

exports.vendorLogin = async (req, res) => {
  const vendor = await Vendor.findOne({ email: req.body.email });
  if (!vendor || !(await bcrypt.compare(req.body.password, vendor.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  res.json({ token: generateToken({ id: vendor._id, role: "vendor" }) });
};

exports.adminSignup = async (req, res) => {
  const admin = await Admin.create({
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ message: "Admin created" });
};

exports.adminLogin = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin || req.body.password !== admin.password)
    return res.status(400).json({ msg: "Invalid admin" });

  res.json({ token: generateToken({ id: admin._id, role: "admin" }) });
};

