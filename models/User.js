import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        whatsappNumber: { type: String, required: true },
        isSend: { type: Boolean, default: false },
        city: { type: String, required: true },
        businessName: { type: String, required: true },
        isBack: { type: Boolean, default: false },
    },
    { timestamps: true },
)

const User = mongoose.model("User", userSchema)

export default User

