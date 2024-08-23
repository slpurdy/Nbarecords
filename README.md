# Lab: Building an Express GET Route to Retrieve NBA Teams from MongoDB

## Overview:
In this lab, you will learn how to create an Express.js GET route to retrieve data stored in a MongoDB database using Mongoose. You will set up an Express server, connect it to MongoDB using Mongoose, define a route to fetch NBA teams, and test the route using Thunder Client, a REST client extension for VS Code.

## Objectives:
1. Set up an Express.js server.
2. Connect Express.js to MongoDB using Mongoose.
3. Define a GET route to fetch NBA teams.
4. Test the GET route using Thunder Client.

## Prerequisites:
- Node.js installed on your machine.
- MongoDB installed and running locally or accessible remotely.
- Thunder Client extension installed in Visual Studio Code (go to extensions and find it).

## Setup:

### 1. Project Setup:
- Create a new directory for your project.
- Navigate into the project directory.
- Install Express.js, Mongoose, and other dependencies using `npm install express mongoose`.

### 2. MongoDB Setup:
- Ensure MongoDB is installed and running locally or accessible remotely.
- Create a MongoDB database named `nba_teams`.
- Create a collection named `teams` within the `nba_teams` database.

## Building the Express Server:

### 1. Import Dependencies:
- Require `express` and `mongoose` in your `server.js` file.

### 2. Initialize Express App:
- Create an instance of Express app and define the port.

### 3. Connect to MongoDB using Mongoose:
- Use Mongoose to connect to the MongoDB database `nba_teams`.

### 4. Define Schema and Model using Mongoose:
- Define a schema for NBA teams with fields like name, wins, and losses.
- Create a Mongoose model for the `teams` collection.

### 5. Define GET Route to Fetch NBA Teams:
- Define a GET route `/teams` that queries all NBA teams from the database.
- Handle errors and return a JSON response with the list of teams.

### 6. Start the Express Server:
- Listen for incoming requests on the defined port.

## Testing the Route using Thunder Client:
1. Open Visual Studio Code.
2. Create a new file and save it with a `.http` extension (e.g., `test.http`).
3. Use Thunder Client syntax to define a request to fetch NBA teams:
[!image](./successfulTest.png)
  
   ```http
   GET http://localhost:3000/teams
   ```
   ### Useful Links 

   [Mongoose Documentation](https://www.npmjs.com/package/mongoose)

   [Express Documentation](https://expressjs.com/en/guide/routing.html)

   [More Mongoose Documentation](https://mongoosejs.com/docs/)
