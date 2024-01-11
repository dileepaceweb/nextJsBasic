import mongoose ,{Schema} from "mongoose";
const UserSchema= new Schema({
    name:{
        type:String ,
    },
    email:{
        type:String,
        required:[true,"Email is Required !!"],
    },
    password:{
        type:String,
        required:[true,"Password is Required !!"],
    },
    about:{
        type:String,
    },
    profileURL:{
        type:String
    }
});
export const User=mongoose.models.nextusers||mongoose.model("nextusers",UserSchema);