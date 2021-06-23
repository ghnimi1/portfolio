const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema(
    {
        employer: {
            type: String,
        },
        position: {
            type: String,
        },
        description: {
            type: String,
        },
        skills: {
            type: String
        },
        date: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('experience', ExperienceSchema);