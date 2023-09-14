const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = async (req, res, next) => {
  try {
    // get token from header
    const jwtToken = req.header("token");

    // if no token send error message 
    if (!jwtToken) {
      return res.status(403).json({ message: "No token provided" });
    }

    // if token, then verify it
    //console.log(res.json({ message: "Not Authorised" }));
    const decoded = jwt.verify(jwtToken, process.env.JWTSECRET)
    req.user = decoded.user
    next();
    
  } catch (err) {
    console.error(err.message);
    return res.status(401).json("Not Authorised");
  }
}