import { pool } from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get("user_id");

    if (!user_id) {
      return new Response(JSON.stringify({ error: "Missing user_id" }), { status: 400 });
    }

    // Fetch bookings for the user
    const [bookings] = await pool.query(
      `SELECT b.id,
        DATE_FORMAT(b.check_in_date, '%d-%m-%Y') AS check_in_date,
        DATE_FORMAT(b.check_out_date, '%d-%m-%Y') AS check_out_date,
        b.total_price, b.discount
       FROM bookings b
       WHERE b.user_id = ? AND
       b.deleted_at IS NULL
       ORDER BY b.created_at DESC`,
      [user_id]
    );

    if (bookings.length === 0) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    // Fetch booking items for each booking
    for (let booking of bookings) {
      const [items] = await pool.query(
        `SELECT r.name, r.price_per_night, bi.quantity 
         FROM booking_items bi
         JOIN room_categories r ON r.id = bi.category_id
         WHERE bi.booking_id = ?`,
        [booking.id]
      );
      booking.items = items;
    }

    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
