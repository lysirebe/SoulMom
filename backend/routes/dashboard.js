// const pool = require('../config/db')
const router = require('express').Router()
const authorise = require('../middleware/authorise')
const journal = require('../controllers/journal')


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

router.get("/entries", authorise, journal.getEntries);
router.post("/newEntry", authorise, journal.createEntry);
router.put("/updateEntry/:journalid", journal.updateEntry);
router.delete("/deleteEntry/:journalid", journal.deleteEntry);

module.exports = router;


// router.get("/entryList", authorise, async (req, res) => {
//   try {
    // userid = req.user.user_id;

    // const entries = await pool.query("SELECT * FROM journal WHERE user_id = $1", [userid])
    
//     if (!entries) {
//       return res.status(400).json({message: "no entries found"})
//     } else {
//       res.json(entries.rows)
//     }
//   } catch (err) {
//     console.error(err.message)
//     res.status(500).json({message:"cant get entries"})
//   }
// })

// router.post("/newEntry", authorise, async (req, res) => {
//   try {

//     const userid = req.user.user_id;
//     const { title, entry } = req.body;

//     console.log(req.body);

//    const newEntry = await pool.query(
//      "INSERT INTO journal (user_id, title, entry) VALUES ($1, $2, $3) RETURNING *",
//      [userid,title,entry]
//    );

//     console.log(newEntry.rows[0])
//     res.json(newEntry.rows[0])
    
//   } catch(err){
//     console.error(err.message)
//     res.status(500).json({message:"Cant add entry to db"})
// }})



