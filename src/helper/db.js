import mongoose from "mongoose";



export const connectDb=async()=>{
    try{
        const {connection}=await mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/learningApp",{
            dbName:"Learning App",
        });
        console.log("MongoDb is connected...");
        //console.log(connection)
    }catch(error){
        console.log(error)
       console.log("Failed to connect with Database")
    }

    };


