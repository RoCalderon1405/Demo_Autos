const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    Modelo: {
        type: String,
        require: [true, 'Por favor  ingresa la marca del Auto']
    },
    Año: {
        type: Number,
        require: [true, 'Por favor  ingresa el año del Auto']
    },
    Color: {
        type: String,
        require: [true, 'Por favor  ingresa el color del Auto']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Autos',autoSchema)