// user_post - new user registration
// user_details - login
// user_index check user has a session or not

import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt"
import { MongoClient, ObjectId, ServerApiVersion, MongoNotConnectedError } from "mongodb";

const uri = process.env.MONGODB_URI ;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const database = client.db("spacerock").collection("users")

const user_post = async (req,res)=>{
  console.log("new user")
  let cursor = await database.findOne({email: req.body.email})
  if(cursor){
    res.status(401)
    res.send("Already existing user")
    return
  } else {
    // password hash
    const hash = bcrypt.hashSync(req.body.password, 10);
    // session
    const sessionId = uuidv4();
    const expiration = new Date(Date.now()+3600000)
   // console.log(expiration) 
   res.cookie("session", sessionId, {expires:  expiration, httpOnly: true}) // session is valid for a day
    database.insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      session: sessionId,
      sessionExpiration: expiration
    }).then(result => res.send(result))
  }
}

const user_details = async (req, res) => {
  console.log("login", req.cookies.session)
  let cursor = await database.findOne({ email: req.body.email })
  if(!cursor){
      res.status(401)
      res.send("User cannot found")
      return
  }
  console.log(cursor.sessionExpiration)
  console.log(new Date(Date.now()))
  // check hashed password matches
  if (bcrypt.compareSync(req.body.password, cursor.password)) {
    const sessionId = uuidv4();
    const expiration = new Date(Date.now()+3600000)
    if(!req.cookies.session){
      console.log("no session found, sending cookies")
      database.updateOne({email:req.body.email}, {$set: {session:sessionId, sessionExpiration:expiration, httpOnly: true}})
      res.cookie("session", sessionId, {expires:  expiration}) // session is valid for a day
      res.send(JSON.stringify("Login is successful"))
    } else if(req.cookies.session && cursor.session == req.cookies.session) {
      console.log("session is not expired")
        res.send(JSON.stringify("Login is successful"))
    }else if(req.cookies.session && cursor.session !== req.cookies.session) {
      console.log('session expired')
      database.updateOne({email:req.body.email}, {$set: {session:sessionId, sessionExpiration:expiration, httpOnly: true}})
      res.cookie("session", sessionId, {expires:  expiration}) // session is valid for a day
      res.send(JSON.stringify("Login is successful"))
    }
  } else {
      res.status(401)
      res.send(JSON.stringify("Authorization is denied"))
  }    
} 


const user_index = async (req, res)=>{
  console.log('checking for session')
    const sessionId = req.cookies.session
    let cursor = await database.findOne({session: sessionId})
    if(!cursor || cursor.sessionExpiration < new Date(Date.now())){
      database.updateOne({session: sessionId}, {$set: {session:null, sessionExpiration:null, httpOnly: true}})
        res.status(401)
        res.send(JSON.stringify('No session found'))
        return
    } else {
        res.send(JSON.stringify({
            email:cursor.email,
            firstName: cursor.firstName,
            lastName : cursor.lastName
        }))
    }
}

const user_out = async (req, res)=>{
  console.log("logging out")
  const sessionId = req.cookies.session;
  let cursor = await database.findOne({session: sessionId})
  if (cursor) {
    database.updateOne({session: sessionId}, {$set: {session:null, sessionExpiration:null, httpOnly: true}})
    res.clearCookie("session", sessionId)
    res.send("logged out")
} else{
  res.status(401)
  res.send("No session found")}
}

const usercontrol = {
    user_details,
    user_post,
    user_index,
    user_out,
  }
  
  export default usercontrol
