import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { user, booking_id } = body;
  if (!user.id || !booking_id ) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      `UPDATE bookings 
       SET deleted_at = NOW()
       WHERE id = ?`,
      [booking_id]
    );

    await conn.commit();
    return NextResponse.json({ booking_id: booking_id}, { status: 201 });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
