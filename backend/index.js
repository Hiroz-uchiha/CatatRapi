require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const mongoString = process.env.DATABASE_URL
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const TodolistRouting = require("./Controller/TodolistRouting")


mongoose.connect(mongoString);
const db = mongoose.connection;

db.once("connnected",() => {
    console.log("Database Connected");
})

db.on("error",(err) => {
    console.log(err)
})

app.use("/todo", TodolistRouting);

app.listen(3001,() => {
    console.log("Server sudah berjalan")
})