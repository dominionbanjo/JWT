const jwt = require("jsonwebtoken");
const { badRequest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new badRequest("Please provide email and password");
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user Created", token });
};

const dashBoard = async (req, res) => {
  const { username } = req.user;
  const luckuNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `Here is your authorized data, your lucky number is ${luckuNumber}`,
  });
};

module.exports = {
  login,
  dashBoard,
};
