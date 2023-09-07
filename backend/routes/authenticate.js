require('dotenv').config();

const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const authorise = require('../middleware/authorise');
const validation = require('../middleware/validation')

//register
router.post("/register", validation, async (req, res) => {
  try {
    //destrctrcture the req.body
    const { name, email, password } = req.body;

    // check if user exists
    const user = await pool.query("SELECT * FROM users WHERE  email = $1", [email]);
    if (user.rows.length > 0) {
      return res.status(400).json({message:"User already exists"})
    }

    //bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);

    //insert user into db 
    const newUser = await pool.query(
      "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *", [name, email, hashedPw]
    );
    // create jwt token
    const payload = {
      user: {
        user_id: newUser.rows[0].user_id,
        email: newUser.rows[0].email,
        name: newUser.rows[0].name
      }
    }

    const jwtToken = jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1h" })
    
    res.status(201).json({
      message: "User created",
      user: newUser.rows[0],
      token: jwtToken
    })
    
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message)
  }
})

//login
router.post("/login", validation, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE  email = $1", [email]);

    if (user.rows.length == 0) {
      return res.status(400).json({ message: "User does not exist" })
    }

    //check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);

    if (isPasswordValid) {
      // create token
      const payload = {
        user: {
          user_id: user.rows[0].user_id,
          email: user.rows[0].email,
          name: user.rows[0].name 
        }
      }

      const jwtToken = jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1h" })
      
      return res.status(400).json({
        message: "succesfully logged in",
        user: user.rows[0],
        token:jwtToken
      })
    } else {
      return res.status(400).json({ message: "Incorrect Password" })
    }
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

//verify user
router.get("/verify", authorise, async (req, res) => {
  try {
    res.json(true);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message)
  }
})


module.exports = router;