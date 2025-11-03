// import {connectDB} from "@/lib/mongodb";
// import Bookings from "@/models/Bookings";
// import Room from "@/models/Room"; 

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   await connectDB();

//   try {
//     const {
//       roomId, 
//       guestName,
//       guestEmail,
//       guestPhone,
//       fromDate,
//       toDate,
//       numberOfRooms,
//       totalPrice,
//       userId,
//     } = req.body;

    
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room category not found" });

    
//     const overlappingBookings = await Bookings.aggregate([
//       {
//         $match: {
//           room: room._id,
//           status: { $ne: "cancelled" }, // ignore cancelled bookings
//           fromDate: { $lte: new Date(toDate) },
//           toDate: { $gte: new Date(fromDate) },
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalBooked: { $sum: "$numberOfRooms" },
//         },
//       },
//     ]);

//     const totalBooked = overlappingBookings.length > 0 ? overlappingBookings[0].totalBooked : 0;

    
//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < numberOfRooms) {
//       return res.status(400).json({
//         message: `Only ${availableRooms} rooms available for the selected date range`,
//       });
//     }

    
//     const booking = await Bookings.create({
//       room: room._id,
//       user: userId,
//       guestName,
//       guestEmail,
//       guestPhone,
//       fromDate,
//       toDate,
//       numberOfRooms,
//       totalPrice,
//       status: "pending",
//       paymentStatus: "unpaid",
//     });

//     return res.status(200).json({ message: "Booking successful", booking });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }
