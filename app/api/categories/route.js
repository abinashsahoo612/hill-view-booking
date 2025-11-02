import { pool } from '@/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [rows] = await pool.query('SELECT id, name, total_rooms, price_per_night FROM room_categories');
        return NextResponse.json(rows, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}