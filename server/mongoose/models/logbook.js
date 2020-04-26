// Dependencies
const mongoose = require("mongoose");

// Global Constant
const Schema = mongoose.Schema;

// Create Schema 
const logbookSchema = new Schema({
    aircraft_id: { type: String },
    tail_number: { type: String },
    entry_date: { type: Date },
    type: { type: String },
    entry_note: { type: String },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const Logbook = mongoose.model("Logbook", logbookSchema);
module.exports = Logbook; 