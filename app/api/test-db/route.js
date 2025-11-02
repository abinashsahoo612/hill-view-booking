// app/api/test-db/route.js
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT NOW() AS current_time");
    return Response.json({ success: true, rows });
  } catch (error) {
    console.error("DB Error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
