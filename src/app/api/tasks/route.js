import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request){

    const {title,content,userId}=await request.json();

    try {
        const task=new Task({
            title,
            content,
            userId
        });
    
        const createdTask=await task.save()
        return NextResponse.json(createdTask,{
            status:201,message:"Task Successfully Created"
        })
    } catch (error) {
        console.log(error);
      return getResponseMessage("Internal server Error",500,false)
    }

}
export async function GET(request){
    try {
        const tasks=await Task.find();
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error);
        return getResponseMessage ("Error in Getting data !!",500,false);
    }

}
export async function PUT(){

}
export async function DELETE(){
    
}