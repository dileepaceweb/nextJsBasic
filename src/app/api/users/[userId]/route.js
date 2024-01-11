import { NextResponse } from "next/server";
import { User } from "@/models/user";

// fetched Data  by user Id 

export async function GET(request,{params}){
    try {
        const {userId}=params;
        const user=await User.findById(userId);
        return NextResponse.json({message:"Data fetched",user});
    } catch (error) {
        console.log(error)
    }
   
}

//update 
export async function PUT(request,{params}){
    try {
        const {userId}=params;
        const { name, email, password, about, profileURL } = await request.json();
        console.log({ name, email, password, about, profileURL });
        const result = await User.updateOne(
            { _id: userId },
            {
              $set: {
                name,
                email,
                password,
                about,
                profileURL,
              },
            }
          );
    return  NextResponse.json({message:"Updated Successfully",user: result});
    } catch (error) {
        console.log(error);
    }
    
}

//delete user
export  async function DELETE(request,{params}){
    try {
        const {userId}=params;
        const data=await User.deleteOne({ _id: userId })
        return NextResponse.json({
        message:" Data deleted Successfully",data
    });
    } catch (error) {
        console.log(error);
    }
    
}