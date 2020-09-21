// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

// Express Setup
const app = express();
const PORT = process.env.PORT || 3001;

// CORS Setup
// app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Static Serve
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// DB Connect (Mongo)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booksearch', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
	console.log('Mongoose connected!');
});

// Start the Server
app.listen(PORT, () => {
	console.log(`Server running on localhost:${PORT}`);
});