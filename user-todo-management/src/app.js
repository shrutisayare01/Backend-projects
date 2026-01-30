const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/todos', require('./routes/todoRoutes'));
module.exports = app;