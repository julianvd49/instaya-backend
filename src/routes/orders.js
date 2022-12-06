const express = require('express');
const orderSchema = require('../models/order');

const router = express.Router();

//Crear orden
router.post('/orders', (req, res) => {
  const order = orderSchema(req.body);
  order
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Obtener todas las ordenes
router.get('/orders', (req, res) => {
  orderSchema
    .find({ id_usuario: req.query.id_usuario })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Obtener orden por id
router.get('/orders/:id', (req, res) => {
  const {id} = req.params;
  orderSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Actualizar orden por id
router.put('/orders/:id', (req, res) => {
  const {id} = req.params;
  const {fecha, hora, estado, largo, ancho, alto, peso, dir_recogida, ciudad_recogida, destinatario, cc, dir_entrega, ciudad_entrega} = req.body;
  orderSchema
    .updateOne({_id: id}, { $set: {fecha, hora, estado, largo, ancho, alto, peso, dir_recogida, ciudad_recogida, destinatario, cc, dir_entrega, ciudad_entrega} })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Eliminar orden por id
router.delete('/orders/:id', (req, res) => {
  const {id} = req.params;
  orderSchema
  .remove({_id: id})
  .then(data => res.json(data))
  .catch(err => res.json({ message: err }));
});

module.exports = router;