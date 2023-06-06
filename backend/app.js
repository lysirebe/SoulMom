const express = require('express');

const app = express();
const port = 5000;



//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use("/authentication", require("./routes/authenticate"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(port, () => {
   console.log(`app listeneing on port ${port}`)
});