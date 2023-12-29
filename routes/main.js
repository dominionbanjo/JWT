const express = require("express");
const router = express.Router();

const { login, dashBoard } = require("../controllers/main");

const auth = require("../middleware/auth");

router.route("/dashboard").get(auth, dashBoard);
router.route("/login").post(login);

module.exports = router;
