`use strict`

// Express boilerplate
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const routes = require('./routes');

// mount routes at root
app.use('/', routes);

app.listen(port)