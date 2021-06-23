const SkillsModel = require('../models/skills.model')
const ObjectId = require('mongoose').Types.ObjectId

module.exports.getAllSkills = async (req, res) => {
    await SkillsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
}
module.exports.createSkills = async (req, res) => {
    try {
        const newSkills = new SkillsModel({
            content: req.body.content,
            iconClass: req.body.iconClass
        })
        await newSkills.save();
        res.status(200).send({ msg: "Add Skills Success", newSkills })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "can not save the Skills" }] });
    }
};

module.exports.deleteSkills = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    try {
        await SkillsModel.remove({ _id: id }).exec()
        res.status(201).json('delete successfull')
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

module.exports.updateSkills = async (req, res) => {
    const { id } = req.params
    if (!ObjectId.isValid(id))
        return res.status(500).send('ID unknown : ' + id)

    const updatedRecord = {
        content: req.body.content,
        iconClass: req.body.iconClass,
    };

    SkillsModel.findByIdAndUpdate(
        id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    );
};