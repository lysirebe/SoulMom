// const pool = require("../config/db");

// module.exports = (req, res) => {

//   const { title, entry } = req.body;
//   const userid = req.user.user_id;

//   pool.query(
//     "INSERT INTO journal (user_id, title, entry) VALUES ($1, $2, $3) RETURNING *",
//     [userid, title, entry],
//     (err, result) => {

//       if (err) {
//         console.error(err.message)
//         res.status(500).json({ message: "Cant add entry to db" })

//       } else {
//         res.status(200).json({
//           message: "entry added to db",
//           entry: result.rows[0]
//         })
//       }
//   })
// }

