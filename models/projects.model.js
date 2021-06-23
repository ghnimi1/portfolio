const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    skills: {
        type: String
    },
    url: {
        type: String
    },
    photo: {
        type: String
    }
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('projects', ProjectsSchema);