const { verify } = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const validateToken = (req, res, next) => {
    // Decode the URL-encoded token and replace underscores with periods
    const usersToken =
    req.headers['authorization'] ||
    req.headers['x-access-token']

    const decodedToken = decodeURIComponent(usersToken).replace(/___/g, ".");

 
  if (!usersToken) {
    return res
      .status(400)
      .send('Your session has expired, Logout and login again!')
  }

  try {

    const validToken = verify(decodedToken, process.env.USERS)

    if (validToken) {
        req.user = validToken;
      next()
    }
  } catch (err) {
    console.log(err)
    return res.status(400).send("Validation error")
  }
}

 

module.exports =  validateToken
