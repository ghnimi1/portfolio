const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema(
    {
        content: {
            type: String,
        },
        iconClass: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('skills', SkillsSchema);