import mongoose from "mongoose";
import {User} from "../models/user";

export const connectDb=async()=>{
    try{
        const {connection}=await mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/BasicNext",{
            dbName:"BasicNext",
        });
        console.log("MongoDb is connected...");
        // const user=new User({
        //     name:"Dileep",
        //     email:"dileep123@gmail.com",
        //     password:"Dileep123@",
        //     about:"This is Testing"
        // });

        // await user.save();
        // console.log("User is created");

    }catch(error){
        console.log(error)
       console.log("Failed to connect with Database")
    }

    };


