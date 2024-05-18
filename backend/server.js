const express = require("express");
const db = require('./database.js')
const cors = require('cors')

const app = express();

const couwroutes = require('./routes/cowroutes.js')
app.use(cors())

app.use(express.json())


app.use('/',couwroutes)


app.listen(5000, () => {
  console.log("server is lestning on port 5000");
});
