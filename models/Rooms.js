import mongoose from "mongoose";

const RoomsSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    short_desc: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bed: {
      type: String,
      required: true,
      trim: true,
    },
    guest: {
      type: Number,
      required: true,
    },
    maxguest: {
      type: Number,
      required: true,
    },
    totalRooms: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Rooms || mongoose.model("Rooms", RoomsSchema);
