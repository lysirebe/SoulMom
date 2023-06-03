const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hi There')
})

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/authentication", require("./routes/authenticate"));

app.listen(port, () => {
   console.log(`app listeneing on port ${port}`)
});