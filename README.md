# Spotify Challenge
To complete this question you will need to write both a client and a server. We are agnostic to how you design the client (mobile web, iOS, Android, desktop web) but it will need to be able to make HTTP requests to a specific endpoints.  The server you create will also need to be able to respond to HTTP requests to specific endpoints.  It is not important what language or framework you use to build your server.

The client should do the following in order
Make a GET request to /people
Make a POST request to /people
Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
Make a GET request to retrieve the object created in the previous request
Make a PUT request to /people and modify the attribute city to be “Brooklyn”
Make a GET request to /people/1
Make a DELETE request to /people/1
Make a GET request to /people

Using restful principles, decide how the server should handle each request including responding with the appropriate JSON.  We are intentionally being vague about what exactly each request should do on the server.  We want you to use your best guess as to how other programmers might expect your API to behave.
Please deploy your server to heroku and give us the address.  Please give us instructions on how your client will make the required requests to your server.

This time we'll be creating a music database from the ground up. You'll need to create the models for songs, artists, genres, and playlist, and then create an API with endpoints to access all of that data.

## API Endpoints
The API endpoints are the following:

1. `/api/people` GET all people
1. `/api/people/:id` GET a specific person by id
1. `/api/people/` POST (create) a new person
1. `/api/people/:id` DELETE a person by id
1. `/api/people/:id` PUT (update) a specific person's info
1. 
