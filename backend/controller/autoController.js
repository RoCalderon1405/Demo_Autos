const asyncHandler = require('express-async-handler')

const Autos = require('../model/autosModel')

const getAuto = asyncHandler(async (req,res) => {
    const auto = await Autos.find()
    res.status(200).json(auto)
})

const setAuto = asyncHandler(async (req,res) => {
    if (!req.body.Modelo) {
        res.status(400)
        throw new Error('Por favor teclea el Modelo del auto')
    }
    if (!req.body.Año) {
        res.status(400)
        throw new Error('Por favor teclea el Año del auto')
    }
    if (!req.body.Color) {
        res.status(400)
        throw new Error('Por favor teclea el Color del auto')
    }

    const auto = await Autos.create({
        Modelo: req.body.Modelo,
        Año: req.body.Año,
        Color: req.body.Color
    })
    res.status(200).json(auto)

})

const updateAuto = asyncHandler(async (req,res) => {

    const auto = await Autos.findById(req.params.id)

    if(!auto) {
        res.status(400)
        throw new Error('Registro no encontrado')
    }

    const updatedAuto = await Autos.findByIdAndUpdate(req.params.id,req.body, {new:true})

    res.status(200).json(updatedAuto)
})

const deleteAuto = asyncHandler(async (req,res) => {

    const auto = await Autos.findById(req.params.id)

    if(!auto) {
        res.status(400)
        throw new Error('Registro no encontrado')
    }

    const deletedAuto = await Autos.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedAuto)
})

module.exports = {
    getAuto,
    setAuto,
    updateAuto,
    deleteAuto
}