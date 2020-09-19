// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

// Express Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// DB Connect (Mongo)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksearch');

// Start the Server
app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});