import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // store hashed password
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reloads
export default mongoose.models.Users || mongoose.model("Users", UserSchema);
