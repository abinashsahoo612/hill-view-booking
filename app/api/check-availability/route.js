import {connectDB} from "@/lib/mongodb";
import Bookings from "@/models/Bookings";
import Room from "@/models/Room";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  await connectDB();

  try {
    const { roomId, fromDate, toDate, numberOfRooms = 1 } = req.query;

    if (!roomId || !fromDate || !toDate) {
      return res.status(400).json({ message: "roomId, fromDate, and toDate are required" });
    }

    
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room category not found" });

    
    const overlappingBookings = await Bookings.aggregate([
      {
        $match: {
          room: room._id,
          status: { $ne: "cancelled" },
          fromDate: { $lte: new Date(toDate) },
          toDate: { $gte: new Date(fromDate) },
        },
      },
      {
        $group: {
          _id: null,
          totalBooked: { $sum: "$numberOfRooms" },
        },
      },
    ]);

    const totalBooked =
      overlappingBookings.length > 0 ? overlappingBookings[0].totalBooked : 0;

    const availableRooms = room.totalRooms - totalBooked;

    if (availableRooms < numberOfRooms) {
      return res.status(200).json({
        available: false,
        availableRooms,
        message: `Only ${availableRooms} rooms available for the selected date range`,
      });
    }

    return res.status(200).json({
      available: true,
      availableRooms,
      message: "Rooms available",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
