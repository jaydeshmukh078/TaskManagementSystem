const express = require("express");
const app= express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require('body-parser');
const cors = require('cors');
const AdminRoute = require("./routes/adminRoute");
mongoose.connect(process.env.DBCONN).then(()=>{
     console.log("DB Succesfully Connected!");
})


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Use CORS middleware
app.use(cors());

app.use("/admin", AdminRoute);


const Port = process.env.PORT || 8000
app.listen(Port, ()=>{
    console.log(`Server run on ${Port}  Port!`);
})