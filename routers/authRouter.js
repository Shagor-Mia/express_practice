const express = require('express');
const bcrypt = require('bcrypt');
const {User} = require("../models/users")
const router  = express.Router();

const authUser = async(req,res) => {
  let user = await User.findOne({email:req.body.email})
  if(!user) return res.status(400).send("invalid email or password!")

  validUser = await bcrypt.compare(req.body.password,user.password)
  if(!validUser) return res.status(400).send("invalid email or password!")

  const token = user.genJWT()
    res.send({Token:token})
}

router.route('/')
.post(authUser)

module.exports = router;