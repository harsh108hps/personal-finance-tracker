const express = require("express");
const { getProfile } = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();
router.get("/profile", auth, getProfile);

module.exports = router;
