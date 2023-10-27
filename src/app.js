const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
// RUTAS
app.use('/api', require('./routes/api'));





module.exports = app;