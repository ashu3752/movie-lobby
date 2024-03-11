const mongoose = require('mongoose');
const moviesController = require('../src/controllers/moviesController');
const Movie = require('../src/models/movie'); // Assuming models are in a separate folder

jest.mock('../src/models/movie'); // Mock the Movie model for unit testing

describe('movies controller', () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockReq = {};
    mockRes = { json: jest.fn() };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all movies', async () => {
    const mockMovies = [
      { title: 'Movie 1' },
      { title: 'Movie 2' }
    ];
    Movie.find.mockResolvedValueOnce(mockMovies);

    await moviesController.getMovies(mockReq, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith(mockMovies);
  });
 
});