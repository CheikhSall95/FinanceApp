const expressAsyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {

  const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
  }

  try {
    if (getTokenFrom(req)) {
      const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
      const user = await User.findById(decodedToken.id)//find the user by id
      req.user = user;
      next();
    }
    else {
      throw new Error("There is no token attached to the header");
    }
  }
  catch(error){
    throw new Error("Not authorized token expired, login again");
  }
  
  

  
  
});

module.exports = authMiddleware;