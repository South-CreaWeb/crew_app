import mongoose from "mongoose";

const crewSchema = new mongoose.Schema({
    customId: String,
    name: String,
    role: String,
    available: Boolean,
    note: String
})

export const Crew = mongoose.model("Crew", crewSchema)