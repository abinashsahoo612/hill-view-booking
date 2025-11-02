import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { user, check_in_date, check_out_date, items, total_price, discount } = body;
  if (!user.id || !check_in_date || !check_out_date || !items || !items.length) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Set payment expiration timeout
    const expiresAt = new Date(
      Date.now() +
        (parseInt(process.env.PAYMENT_TIMEOUT_MINUTES || "15", 10) * 60 * 1000)
    );

    const [result] = await conn.query(
      `INSERT INTO bookings 
        (user_id, check_in_date, check_out_date, total_price, discount, status, payment_status, expires_at, created_at,created_by)
       VALUES (?, ?, ?, ?, ?, 'pending_payment', 'pending', ?, NOW(),?)`,
      [user.id, check_in_date, check_out_date, total_price, discount, expiresAt,user.id]
    );

    const bookingId = result.insertId;
    // const bookingId = 1;

    // Insert booking items
    for (const it of items) {
      await conn.query(
        `INSERT INTO booking_items (booking_id, category_id, quantity,created_at,created_by) VALUES (?, ?, ?,NOW(),?)`,
        [bookingId, it.category_id, it.quantity,user.id]
      );
    }

    await conn.commit();

    // const orderId = `BOOKING-${bookingId}-${Date.now()}`;
    const orderAmount = (total_price - total_price * 0.15).toFixed(2);
    // const createOrderPayload = {
    //   order_id: orderId,
    //   order_amount: 3400,
    //   order_currency: "INR",
    //   customer_details: {
    //     customer_id: String(user.id),
    //     customer_name: user.name,
    //     customer_email: user.email,
    //     customer_phone: user.phone || "9999999999",
    //   },
    //   order_meta: {
    //     return_url: `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/payment-status?booking_id=${bookingId}`
    //   }
    // };
    // const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-client-id": process.env.CASHFREE_APP_ID,
    //     "x-client-secret": process.env.CASHFREE_SECRET_KEY,
    //     "x-api-version": "2025-01-01",
    //   },
    //   body: JSON.stringify(createOrderPayload),
    // });

    // const data = await response.json();

    // if (!response.ok) {
    //   return NextResponse.json({ error: data.message }, { status: response.status });
    // }
    // console.log(data);
    return NextResponse.json({ booking_id: bookingId, orderAmount:orderAmount}, { status: 201 });
    // return NextResponse.json({ booking_id: bookingId,payment_session_id: data.payment_session_id }, { status: 201 });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
