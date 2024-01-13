const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const normalize = require('normalize-url');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/signup', async (req, res) => {
  const {username, email, password, walletAmount} = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User already exists" }] });
    }
    
    user = new User({
      username,
      email,
      password,
      walletAmount
    });

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post('/signin', async (req, res) => {
  const {email, password} = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(user.email, user.password);
    if (user.password != password) {
      
      res.status(400).send("Server error");
    }
    else {
      res.send('success');
    }
  } catch (err) {
    res.status(400).send("Server error");
    // console.error(err.message);
  }
});

router.post('/openWallet', async (req, res) => {
  const email = req.body.email;
  let user = await User.findOne({ email });
  res.send({user});
});

module.exports = router;
