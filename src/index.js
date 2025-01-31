//require ('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./controllers/db/index.js";
dotenv.config({
  path:'./env'

}) 

connectDB()

.then(()=>{



  app.on("error",(error)=>{
    console.log("ERROR: ", error);
    throw error
  })

  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running one the port : ${process.env.PORT}`);
  })

})
.catch((err)=>{
  console.log("MONGOdb connnection failed", err);
})


















/*
import express from "express"
const app = "express"
( async () =>{
  try {

    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
      console.log("ERROR: ", error);
      throw error
    })

    app.listen(process.env.PORT,()=> {
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR",error)
    throw err
    
  }
})() //ifes
// 
// */