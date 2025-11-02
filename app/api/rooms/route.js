import {connectDB} from "@/lib/mongodb";
import Rooms from "@/models/Rooms";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const rooms = await Rooms.find({});
    
    return NextResponse.json(rooms, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Error fetching rooms" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const { id, ...data } = await req.json();

    const updated = await Rooms.findByIdAndUpdate(id, data, { new: true });
    if (!updated) return NextResponse.json({ error: "Room not found" }, { status: 404 });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Error updating room" }, { status: 500 });
  }
}
