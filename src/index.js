const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

const app = express();
app.use(cors());
const port = process.env.PORT || 9000;
app.listen(port, () => console.log('server listening on port', port));

// routes
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_KEY)
  .then(() => console.log('Conectado a la base de datos atlas'))
  .catch((err) => console.log(err));

app.use(express.json());
// Definimos la rutas a utilizar
app.use('/api', userRoutes, orderRoutes);
