import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { booking_id, status } = await request.json();
  if (!booking_id) return NextResponse.json({ error: "Missing booking_id" }, { status: 400 });

  try {
    const [result] = await pool.query(
      "UPDATE bookings SET payment_status = ?, status = 'confirmed' WHERE id = ?",
      [status, booking_id]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
