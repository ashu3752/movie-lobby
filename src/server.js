const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const moviesController = require('./controllers/moviesController');

// Load environment variables
dotenv.config();

// Define the MongoDB connection string
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Create the Express app
const app = express();

// Configure body parser to handle incoming request bodies
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.get('/movies', moviesController.getMovies);
app.get('/search', moviesController.searchMovies);  
app.post('/movies' , moviesController.createMovie);  
app.put('/movies/:id', moviesController.updateMovie);  
app.delete('/movies/:id', moviesController.deleteMovie);  