import express from "express"
import User from "../models/User.js"

const router = express.Router()

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find().sort({ isSend: 1 });
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Create a new user
router.post("/", async (req, res) => {
    const user = new User(req.body)
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update a user
router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete a user
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: "User deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Toggle isBack status
router.patch("/:id/toggle-back", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.isBack = !user.isBack
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default router

