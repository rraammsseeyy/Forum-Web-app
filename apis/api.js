const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts')
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { verify } = require('jsonwebtoken')
const validateToken = require('./verifyToken')

dotenv.config()

router.post('/register', async (req, res) => {

  const {
    email_address,
    fullname,
    sex,
    password,
  } = req.body

  try {

    const salt = await bcrypt.genSalt(10)
    const hashedToken = await bcrypt
      .hash(password, salt)
      .then(async (passwordHased) => {
        const user = new User({
          email_address,
          fullname,
          sex,
          password,
        })

        await user.save()

        return res.status(200).send(user)
      })
      .catch((err) => {
        console.log(err)
        return res.status(400).send("Error Saving")
      })
  } catch (error) {
    console.log(error)
    return res.status(400).send("Error Saving")
  }
})

 
// LOGIN
router.post('/login', async (req, res, next) => {

  const { email_address, password } = req.body

  //Email duplucate check
  const userCheck = await User.findOne({ email_address })

  if (!userCheck) return res.status(404).send('email not found!')


  //  check Password
  const passwordCheck = await bcrypt
    .compare(password, userCheck.password)
    .then(async (result) => {
      if (!result) return res.status(404).send('Invalid Password')

      const giveToken = await jwt.sign(
        {
          _id: userCheck._id,
          email_address: userCheck.email_address,
        },
        process.env.USERS,
        { expiresIn: '6d' },
      )

      const encodedToken = giveToken.replace(/\./g, '___')
      const urlEncodedToken = encodeURIComponent(encodedToken)

      return res.status(200).json({
        data: 'Success. Redirecting...',
        user: email_address,
        token: urlEncodedToken,
        loggedIn: true,
      })
    })
    .catch((e) => {
      return res.status(400).send("Error Signing in")
    })
})


//  POST 
router.post("/post-content", validateToken, async (req, res) => {
  const { user, post, } = req.body;


  const findUser = User.find({ _id: _id });
  if (!findUser)
    return res
      .status(404)
      .send("You cannot make this request");

  const findUserReporter = User.find({ _id: reporter_id });
  if (!findUserReporter)
    return res
      .status(404)
      .send("You cannot make this request");

  try {

    const newPosts = new Posts({
      username:user,
      post:post, 
    });

    await newPosts.save();

    return res.status(200).send('Posted successfully');
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error sending Report");
  }
});


//  get current user
router.get('/me', validateToken, async (req, res) => {
  var token = req.headers['authorization'] || req.headers['x-access-token']
  const decodedToken = decodeURIComponent(token).replace(/___/g, '.')

  if (!token) {
    return res
      .status(400)
      .send('You cannot perform any activities until you are logged In')
  }

  verify(decodedToken, process.env.USERS, async (err, decoded) => {
    if (err) return res.status(400).send('Invalid token')

    req.user = decoded
    try {
      await User.findById(req.user._id)
        .select('-password')
        .then((data) => {
          return res.status(200).send(data)
        })
        .catch((err) => {
          return res.status(403).send('Unable to fetch your requested data')
        })
    } catch (err) {
      return res.status(400).send("Validation Error")
    }
  })
})


 

////////////// RESET PASSWORD ///////////
 
router.post('/update-password/:email_address', async (req, res) => {
  // error message check

  const { password } = req.body
  const { email_address } = req.params

  try {
    const findUser = await User.findOne({ email_address: email_address })

    if (!findUser)
      return res.status(404).send('You cannot make this update right now')

    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // // send and update info - database

    const user = await User.updateOne(
      { email_address: email_address },
      {
        $set: {
          password: hashedPassword,
        },
        $currentDate: { timeStamp: true },
      },
    )

    return res.status(200).send('Updated Successfully')

  } catch (error) {
    return res.status(400).send("Error")
  }
})

/////////////////DELETE MY ACCPUNT //////////

router.post('/delete-my-account', validateToken, async (req, res) => {
  const { _id } = req.body

  const user = await User.findOne({ _id: _id }).exec()

  if (!user) {
    return res.status(404).send('User snot found')
  }

  try {
     
    const result = await User.deleteOne({ _id: _id })

    return res.status(200).send('Deleted successfully')
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
