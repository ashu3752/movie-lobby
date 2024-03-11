API Documentation:

Endpoints:

GET /movies: Retrieves a list of all movies in the lobby.

Response:
Status Code: 200 (OK)
Body: An array of JSON objects representing movies, each containing properties like title, genre, rating, and streamingLink.


GET /search?q={query}: Searches for movies by title or genre (case-insensitive).

Request:
Query Parameter: q (required) - The search query string.
Response:
Status Code: 200 (OK)
Body: An array of JSON objects representing matching movies.
Status Code: 400 (Bad Request) - If the search query is missing.


POST /movies  : Adds a new movie to the lobby.

Request:
Body: A JSON object containing movie details like title, genre, rating, and streamingLink.
Response:
Status Code: 201 (Created) - If the movie is created successfully.
Status Code: 400 (Bad Request) - If movie data is invalid or missing required fields. 


PUT /movies/:id : Updates an existing movie's information.

Request:
Path Parameter: :id - The ID of the movie to be updated.
Body: A JSON object containing the updated movie details (e.g., title, genre, rating, streamingLink).
Response:
Status Code: 200 (OK) - If the movie is updated successfully, containing the updated movie data.
Status Code: 400 (Bad Request) - If update data is invalid.
Status Code: 404 (Not Found) - If the movie ID is not found.

DELETE /movies/:id : Deletes a movie from the lobby.

Request:
Path Parameter: :id - The ID of the movie to be deleted.
 
Response:
Status Code: 200 (OK) - If the movie is deleted successfully, containing a confirmation message