const mongoose = require('mongoose')

const userAutosSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Por favor ingresa el nombre del usuario']
    },
    email: {
        type: String,
        require: [true, 'Por favor ingresa el email del usuario']
    },
    password: {
        type: String,
        require: [true, 'Por favor ingresa el password del usuario']
    }
},
    {
        timestamps: true
    }    
)

module.exports = mongoose.model('UserAutos', userAutosSchema)