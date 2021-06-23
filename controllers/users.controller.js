const UserModel = require('../models/users.model')
const ObjectId = require('mongoose').Types.ObjectId
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

module.exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const userExists = await UserModel.findOne({ email })

        if (userExists) res.status(404).send('User already Exists')

        if (password.length < 6)
            return res.status(400).json({ msg: "Password is at least 6 characters long." })

        // Password Encryption
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new UserModel({
            firstName, lastName, email, password: passwordHash
        })

        // Save mongodb
        await newUser.save()
        if (newUser) {
            // status 201 means sth was CREATED
            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                token: generateToken(newUser._id) // We want to authenticate right after we register
            })
        }
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "can not save the User" }] });
    }
};
module.exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })
        if (user) return res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id) // We want to authenticate right after we register
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
};

module.exports.getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).select('-password')
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        res.json(user)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
};