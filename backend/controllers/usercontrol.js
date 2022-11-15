// user_post - new user registration
// user_details - login
// user_index check user has a session or not

import { MongoClient, MongoNotConnectedError, ObjectId } from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt"


const client = new MongoClient("mongodb://localhost:27017");
const database = client.db("spacerockproject").collection("users")

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
  console.log("login")
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
      if(cursor.sessionExpiration < new Date(Date.now()) || cursor.sessionExpiration == null || cursor.session == null){
          console.log('session expired')
          const sessionId = uuidv4();
          const expiration = new Date(Date.now()+3600000)
          database.updateOne({email:req.body.email}, {$set: {session:sessionId, sessionExpiration:expiration, httpOnly: true}})
          res.cookie("session", sessionId, {expires:  expiration}) // session is valid for a day
          res.send(JSON.stringify("Login is successful"))
      } else { // session is not expired
        console.log("session is not expired")
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
  let cursorSession = await session.findOne({session: sessionId})
  if (cursorSession) {
    session.deleteOne({session: sessionId})
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
