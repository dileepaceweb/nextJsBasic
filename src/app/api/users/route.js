import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
connectDb();
export function GET(request){
    const users=[
        {
        name:"Dileep Kumar",
        phone:"91828737838",
        course:"Java"
    },
    {
        name:"Sonu Kumar",
        phone:"91828755838",
        course:"Js"
    },

{
    name:"Monu Kumar",
    phone:"9182873799",
    course:"C"
}];
return NextResponse.json(users);


}

export function POST(){

}

export function DELETE(request){
  console.log("Delete API called");
  return NextResponse.json({
    message:"Deleted !!",
    status:true,
  }
  ,
  {
    status:201,statusText:"Hey changed  text"
  });
}
export function PUT(){

}