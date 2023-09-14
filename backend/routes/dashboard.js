// const pool = require('../config/db')
const router = require('express').Router()
const authorise = require('../middleware/authorise')
const journal = require('../controllers/journal')


// this route ensures that user data  can be accessed
router.post("/", authorise, async (req, res) => {
  try {
    // after passing middleware req.user now stores all the user data 
    const user = req.user
    res.json(user)

  } catch (err) {
     console.error(err.message)
     res.status(500).json({message: err.message})
    }
  }
)

router.get("/entries", authorise, journal.getEntries);
router.post("/newEntry",authorise, journal.newEntry);
router.put("/updateEntry/:journalid", journal.updateEntry);
router.delete("/deleteEntry/:journalid", journal.deleteEntry);

module.exports = router;



