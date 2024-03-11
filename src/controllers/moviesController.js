const Movie = require('../models/movie')


exports.getMovies = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.searchMovies = async (req, res) => {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }
  
    try {
      const movies = await Movie.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { genre: query }] }); // Case-insensitive search on title and genre
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.createMovie = async (req, res) => {
     
    const newMovie = new Movie({
      title: req.body.title,
      genre: req.body.genre,
      rating: req.body.rating,
      streamingLink: req.body.streamingLink
    });
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.updateMovie = async (req, res) => { 
    const id = req.params.id;
    const updates = req.body; 
  
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(id, updates, { new: true });  
      if (!updatedMovie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(updatedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.deleteMovie = async (req, res) => { 
    const id = req.params.id;
  
    try {
      const deletedMovie = await Movie.findByIdAndDelete(id); // Find by ID and delete
      if (!deletedMovie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };