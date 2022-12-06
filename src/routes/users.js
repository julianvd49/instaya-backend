const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();
//Crear usuario
router.post('/users/register', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then(data => res.json(data))
    .catch(err => res.json({ message: err }));
});

//Obtener usuario
router.post('/users', (req, res) => {
  console.log(req.body);

  userSchema
  .find({ usuario: req.body.usuario, password: req.body.password })
  .then(data => {
    res.json(data);
  })
  .catch(err => res.json({ message: err }));
});

//Obtener un usuario por id
router.get('/users/:id', (req, res) => {
  const {id} = req.params;
  console.log(req.params);
  userSchema
  .findById(id)
  .then(data => res.json(data))
  .catch(err => res.json({ message: err }));
});

//Actualizar usuario por id
router.put('/users/:id', (req, res) => {
  const {id} = req.params;
  const {nombre, usuario, contraseña, email} = req.body;
  userSchema
  .updateOne({_id: id}, { $set: {nombre, usuario, contraseña, email} })
  .then(data => res.json(data))
  .catch(err => res.json({ message: err }));
});

router.delete('/users/:id', (req, res) => {
  const {id} = req.params;
  userSchema
  .remove({_id: id})
  .then(data => res.json(data))
  .catch(err => res.json({ message: err }));
});

module.exports = router;