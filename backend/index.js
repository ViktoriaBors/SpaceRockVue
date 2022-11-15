import express from "express";
import { MongoClient } from "mongodb";
import datarouter from "./routes/dataRoutes.js"
import userrouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import fs from "fs"
import bcrypt from "bcrypt"
import multer from "multer"
import cors from "cors"

const client = new MongoClient("mongodb://localhost:27017");
let db

const app = express();
const port = 8081;
  
app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials: true, origin: ['http://192.168.1.172:8080', 'http://localhost:8080']}))

app.get('/', (req, res) => {
  res.redirect("")
})

// data routes
app.use("/data",datarouter)

// user routes
app.use("/user", userrouter)

client.connect().then(()=>{
  db = client.db("spacerockproject");
  app.listen(port,()=>{
    console.log(`App listening on port ${port}`)})
  }).catch(err=>console.log(err))

