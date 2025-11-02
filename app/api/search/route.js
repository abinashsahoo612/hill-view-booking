import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { check_in_date, check_out_date } = body;

    if (!check_in_date || !check_out_date) {
      return NextResponse.json(
        { error: "Missing check_in_date or check_out_date" },
        { status: 400 }
      );
    }

    const [booked] = await pool.query(`
      SELECT 
        bi.category_id,
        SUM(bi.quantity) AS booked_rooms
      FROM booking_items bi
      JOIN bookings b ON b.id = bi.booking_id
      WHERE LOWER(b.status) = 'confirmed'
        AND b.check_in_date < ?
        AND b.check_out_date > ?
      GROUP BY bi.category_id
    `, [check_out_date, check_in_date]);

    const [categories] = await pool.query(`
      SELECT id AS category_id, name, price_per_night, total_rooms
      FROM room_categories
    `);

    const result = categories.map(cat => {
      const bookedCat = booked.find(b => b.category_id === cat.category_id);
      const bookedRooms = bookedCat ? bookedCat.booked_rooms : 0;
      const availableRooms = cat.total_rooms - bookedRooms;

      return {
        ...cat,
        available_rooms: availableRooms,
        booked_rooms: bookedRooms
      };
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
