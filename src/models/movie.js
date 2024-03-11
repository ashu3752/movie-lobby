const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({ 
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,  
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10  // Assuming a 0-10 rating system
    },
    streamingLink: {
        type: String,
        optional: true
    },
    createdAt: { type: Date, default: Date.now }
  });

module.exports =  mongoose.model('Movie', MovieSchema);
