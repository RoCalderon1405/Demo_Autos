const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const UserAutos = require('../model/userAutosModel')


const registrarUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Faltan datos, favor de verificar')
    }

    const userExiste = await UserAutos.findOne({ email })

    if (userExiste) {
        res.status(400)
        throw new Error('Ese usuario ya existe')
    }

    //Hass password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userAutos = await UserAutos.create({
        name,
        email,
        password: hashedPassword
    })

    if (userAutos) {
        res.status(201).json({
            _id: userAutos._id,
            name: userAutos.name,
            email: userAutos.email,
            message: 'User created'
        })
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await UserAutos.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Credenciales incorrectas')
    }
    res.json({ message: 'Login Usuario' })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const dataUser = asyncHandler(async (req, res) => {
    const { _id, name, email } = req.user

    res.status(200).json({
        id: _id,
        name,
        email
    })
})

module.exports = {
    registrarUser,
    loginUser,
    dataUser
}