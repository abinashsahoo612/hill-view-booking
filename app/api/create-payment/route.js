import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request) {
  const { booking_id, user, status, payment_status, amount, payment_provider = "Manual" } =
    await request.json();

  if (!booking_id || !amount) {
    return NextResponse.json({ error: "Missing booking_id or amount" }, { status: 400 });
  }

  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    await connection.query(
      `UPDATE bookings 
       SET status = ?, payment_status = ?, updated_at = NOW()
       WHERE id = ?`,
      [status || "confirmed", payment_status || "paid", booking_id]
    );

    const transaction_id = "TXN-" + randomUUID().slice(0, 10); 
    await connection.query(
      `INSERT INTO payments 
        (booking_id, payment_provider, transaction_id, amount, currency, created_at,created_by) 
       VALUES (?, ?, ?, ?, ?, NOW(),?)`,
      [
        booking_id,
        payment_provider,
        transaction_id,
        amount,
        "INR",
        user.id
      ]
    );

    await connection.commit();
    connection.release();

    return NextResponse.json({
      success: true,
      booking_id,
      transaction_id,
      message: "Payment recorded successfully",
    });
  } catch (err) {
    await connection.rollback();
    connection.release();
    console.error("Payment update failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
