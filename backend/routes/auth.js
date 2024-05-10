const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_secret = "its good";

router.post("/", [body("email").isEmail()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const salt = await bcrypt.genSalt(10);
  const secpass = await bcrypt.hash(req.body.password, salt);

  try {
    let user = await User.create({
      name: req.body.name,
      password: secpass,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    const jwt_data = jwt.sign(data, jwt_secret);
    console.log(jwt_data);

    // res.json(user);
    res.json(jwt_data);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }

  //res.json(obj);
  // console.log(req.body);
  // const user = User(req.body);
  // user.save();
  // res.send(req.body);
});
module.exports = router;
