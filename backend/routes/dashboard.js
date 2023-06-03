// const pool = require('../config/db')
const router = require('express').Router()
const authorise = require('../middleware/authorise')

router.post("/", authorise, async (req, res) => {
  try {
    
    // after passing middleware req.user now stores all the user data 
    const user = req.user
    res.json(user)

  } catch (err) {
     console.error(err.message)
      res.status(500).json({message: "server error"})
    }
  }
)

module.exports = router;