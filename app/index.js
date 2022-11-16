import express from "express";
import { MongoClient } from "mongodb";
import datarouter from "./routes/dataRoutes.js"
import userrouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import fs, { statSync } from "fs"
import bcrypt from "bcrypt"
import multer from "multer"
import cors from "cors"
import path from 'path';
import {fileURLToPath} from 'url';

const client = new MongoClient("mongodb://localhost:27017");
let db

// serve Vue static
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, '/public/dist')))
app.use(express.json())
app.use(cookieParser());
app.use(cors({credentials: true, origin: ['http://192.168.1.172:8080', 'http://localhost:8080']}))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public/dist') });
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

