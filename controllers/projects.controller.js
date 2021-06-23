const ProjectsModel = require('../models/projects.model')
const ObjectId = require('mongoose').Types.ObjectId

module.exports.getAllProjects = async (req, res) => {
    await ProjectsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
}
module.exports.createProject = async (req, res) => {
    try {
        const newProject = new ProjectsModel({
            name: req.body.name,
            skills: req.body.skills,
            url: req.body.url,
            photo: req.file.path
        })
        await newProject.save();
        res.status(200).send({ msg: "Add project Success", newProject })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "can not save the Project" }] });
    }
};

module.exports.deleteProject = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    try {
        await ProjectsModel.remove({ _id: id }).exec()
        res.status(201).json('delete successfull')
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

module.exports.updateProject = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    const updatedRecord = {
        name: req.body.name,
        skills: req.body.skills,
        url: req.body.url,
        photo: req.file.path
    };

    ProjectsModel.findByIdAndUpdate(
        id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    );
};