import { connectDB } from "@/lib/mongodb";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await User.create({
      username: "admin",
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json({ success: true, admin });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
