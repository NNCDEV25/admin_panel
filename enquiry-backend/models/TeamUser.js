import mongoose from "mongoose";
import bcrypt from "bcrypt";

const teamUserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "employee", "manager"],
    default: "employee",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Hash password before saving
teamUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const TeamUser = mongoose.model("TeamUser", teamUserSchema);
export default TeamUser;
