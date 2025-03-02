import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // Cloudinary
      required: true,
    },
    coverImage: {
      type: String, // Cloudinary
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true, // Correct placement of timestamps
  }
);

userSchema.pre("save",async function (next){
  if(!this.isModified("password")) return next(); 

  this.password = brcrypt.hash(this.password, 10)
  

   next()

userSchema.methods.isPasswordCorrect = async function(password){

 return await bcrypt.compare(password, this.password)


}
userSchema.methods.generateAccessToken=function(){
 return Jwt.sign(
  {
    _id: this._id,
    email:this.email,
    username:this.username,
    fullname:this.fullname

  },
process.env.ACCESS_TOKEN_SECRET,
{
  expiresIn: process.env.ACCESS_TOKEN_EXPIRY

})
}
userSchema.methods.generateRefreshToken=function()
{
  return Jwt.sign(
    {
      _id: this._id
    },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  
  })
}

})
export const User = mongoose.model("User", userSchema);
