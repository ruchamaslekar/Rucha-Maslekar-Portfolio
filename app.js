// This file sets up and configures the Express server, serves static files, 
// connects to MongoDB, and includes routing for the application

const config = require('./modules/config'); 
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

// Serving static files from public/pages
app.use(express.static(path.join(__dirname, 'public')));

// Serving static files from modules
app.use('/modules', express.static(path.join(__dirname, 'modules')));

app.use('/', routes);

app.listen(3000, () => console.log('Server running on port 3000'));

// Connecting to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
