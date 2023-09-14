const pool = require("../config/db");

const getEntries = (req, res) => {

  userid = req.user.user_id;
  pool.query("SELECT * FROM journal WHERE user_id = $1", [userid], (err, result) => {
    if (err) {
      console.error(err.message)
      res.status(500).json({ message: err.message })
    } else {
      res.status(200).json(result.rows)
    }
  })
}



const newEntry = (req, res) => {
  const { title, entry } = req.body;
  userid = req.user.user_id;


  pool.query(
    "INSERT INTO journal (user_id, title,  entry) VALUES ($1, $2, $3) RETURNING *",
    [userid, title, entry],
    (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ message: "Cant add entry to db" });
      } else {
        res.status(200).json({
          message: "entry added to db",
          entry: result.rows[0],
        });
      }
    }
  );
};

const updateEntry = (req, res) => {
  // const userid = req.user.user_id;
  const {journalid} = req.params;
  const { entry, title } = req.body;

  pool.query("UPDATE journal SET entry = $1, title = $2 WHERE journal_id = $3 RETURNING *", [entry, title, journalid], (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Cant update journal entry" });
    } else {
      res.status(200).json({
        message: "entry updated",
        entry: result.rows[0]
      })
    }
  });
}

const deleteEntry = (req, res) => {
  try {
    const { journalid } = req.params;
    const query = "DELETE FROM journal WHERE journal_id = $1"
    const values = [journalid]
    const result = pool.query(query, values)
    
      if (result.rowCount === 0) {
        res.status(404).json({message:"Entry not found"})
      } else {
        res.status(200).json({message:"entry deleted"})
    }
    
  } catch (err) {
      console.error(err.message)
      res.status(400).json({message:err.message})
    }
}

// have a recently deleted file 
module.exports = {
  getEntries,
  newEntry,
  // createEntry,
  updateEntry,
  deleteEntry
}