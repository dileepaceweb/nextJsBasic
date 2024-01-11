import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    const {taskId}=params;
    try {
        const task=await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        return getResponseMessage("Error in getting  task !!",404, false);
    }

}
export async function PUT(request,{params}){
    try {
        const {taskId}=params;
        console.log(taskId);
        const {title,content,userId}= await request.json()
        console.log({title,content,userId})
        const task=await Task.findById(taskId);
          (task.title=title),(task.content=content),(task.userId=userId);
        const updatedTask=await task.save();
          return NextResponse.json({message:"Task successfully Updated",updatedTask});
    } catch (error) {
        console.log(error);
        return getResponseMessage("Internal Error",500,false)
    }


}
export async function DELETE(request,{params}){
    const {taskId}=params;
    try {
        const task=await Task.deleteOne({_id:taskId});
        return NextResponse.json({task,message:"Successfully Deleted"})
    } catch (error) {
        return getResponseMessage("Error in getting task !!", 404,false);
    }

}

