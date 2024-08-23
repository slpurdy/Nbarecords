const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch'); // Import fetch for making HTTP requests

// Create an instance of Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/nba_teams', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define schema and model for NBA teams
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  }
});

const Team = mongoose.model('Team', teamSchema);

// Fetch external JSON data and insert into MongoDB
fetch('/nba_team.json')
  .then(res => res.json())
  .then(data => {
    // Assuming data is an array of team objects [{name: "TeamName", wins: 0, losses: 0}, ...]
    return Team.insertMany(data);
  })
  .catch(err => console.error(err));

// Define GET route to fetch NBA teams
app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
