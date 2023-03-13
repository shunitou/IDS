import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileId: {
      type: String,
    },
    number: {
      type: String,
      default: "1",
    },
    walletAddress: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

let Users = mongoose.models.users || mongoose.model("users", userSchema);

async function saveUser(walletAddress) {
  const user = new Users({ walletAddress });
  await user.save();
}

export { Users, saveUser };