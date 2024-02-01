const express = require('express');
const cors = require('cors');
const userRoutes = require('./router/user.router');
const errorHandling = require('./error/errorHandling');

const app = express();

app.set('port', 3000);
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(userRoutes);
app.use(errorHandling);

module.exports = app;