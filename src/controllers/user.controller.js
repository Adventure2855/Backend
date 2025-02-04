import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res)=>{
  //get user details from frontend
  //validation
  //check if user already exist or not:username,email

  //check for image,avatar
  //upload th eto cloudary,avatar
  //create user object - crreate entry in db
  //remove password and frefresh token fild from response
  //chck for user creation 
  //retun response

  const {fullName, email, username, password} = req.body

  console.log("email: ",email);
  

}) 

export {registerUser,}