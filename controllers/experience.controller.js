const ExperienceModel = require('../models/experience.model')
const ObjectId = require('mongoose').Types.ObjectId

module.exports.getAllExperience = async (req, res) => {
    await ExperienceModel.find({}).sort('-createdAt').exec((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
}
module.exports.createExperience = async (req, res) => {
    try {
        const newExperience = new ExperienceModel({
            employer: req.body.employer,
            position: req.body.position,
            description: req.body.description,
            skills: req.body.skills,
            date: req.body.date
        })
        await newExperience.save();
        res.status(200).send({ msg: "Add Experience Success", newExperience })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "can not save the Experience" }] });
    }
};

module.exports.deleteExperience = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    try {
        await ExperienceModel.remove({ _id: id }).exec()
        res.status(201).json('delete successfull')
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

module.exports.updateExperience = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    const updatedRecord = {
        employer: req.body.employer,
        position: req.body.position,
        description: req.body.description,
        skills: req.body.skills,
        date: req.body.date
    };

    ExperienceModel.findByIdAndUpdate(
        id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    );
};