const express = require("express");

const cowcontroller = require("../controller/Cowscontroller.js");

const cowrouter = express.Router();

cowrouter.use(express.urlencoded({extended:true}))

cowrouter.post("/cows", cowcontroller.postcowcontroller);
cowrouter.get("/cows",cowcontroller.getcowcontroller)
cowrouter.put("/cows/:id",cowcontroller.updatecowcontroller)
cowrouter.delete("/cows/:id",cowcontroller.deletecowcontroller)

module.exports = cowrouter;
