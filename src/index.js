// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const app = express();

// Middleware
app.use(express.json()); 

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });

export default app;










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