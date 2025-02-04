import {v2 as cloudary}  from "cloudinary"
import { response } from "express";
import fs from "fs"   

cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KE', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary =async (localFilePath) =>{
  try {
    if (!localFilePath)return null

    //upload the file

   const reponse= await cloudary.uploader.upload(localFilePath, {
      resource_type:"auto"
    })  

    //file upload successfully
    console.log("file is upload on cloudainary", response.url);
    return response;
    
  } catch (error) {

    fs.unlinkSync(localFilePath) //remove locaallly temporary file

    return null;

    
  }
}

export {uploadOnCloudinary}  
    