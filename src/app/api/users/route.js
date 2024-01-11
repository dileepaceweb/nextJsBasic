import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

// create User
export async function POST(request) {
  try {
    const { name, email, password, about, profileURL } = await request.json();
    //console.log({ name, email, password, about, profileURL });

    const user = new User({
      name,
      email,
      password,
      about,
      profileURL
    });

    await user.save();
    console.log("user is created");

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function GET(request) {
  try {
    const users = await User.find();
    //console.log(users);
    return NextResponse.json(users);

    
  } catch (error) {
    console.error("Error fetching users:", error);

  }
}
