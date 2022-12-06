const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    largo: {
        type: Number,
        required: true
    },
    ancho: {
        type: Number,
        required: true
    },
    alto: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    dir_recogida: {
        type: String,
        required: true
    },
    ciudad_recogida: {
        type: String,
        required: true
    },
    destinatario: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    dir_entrega: {
        type: String,
        required: true
    },
    ciudad_entrega: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: false
    },
    id_usuario: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('order', orderSchema);