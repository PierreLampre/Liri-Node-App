//require statements
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


// capture the command that the user puts in (process.argv[2])

let command = process.argv[2];



// capture the user's search term (process.argv index 3 and later) (*use activity 18 level 2 for guidance on how to capture this!*)

var nodeArgs = process.argv;
var userInput = "";

for(var i = 3; i < nodeArgs.length; i++) {
    // userInput = userInput + nodeArgs[i];
    if(i > 3) {
        userInput += "+" + nodeArgs[i];
    } else {
        userInput += nodeArgs[i];
    }
}

// Make a switch statement for the four commands. The default case should tell the user to try again.

function doTheThing(command) {

switch(command) {
    case "spotify-this-song":
            console.log("");
            console.log("***************Ah, music info you seek?***************");
            console.log("");
        break;

    case "concert-this":
            console.log("");
            console.log("***************Ah, concert info you seek?***************");
            console.log("");
            let query = "https://rest.bandsintown.com/artists/" + userInput + "/events/?app_id=codingbootcamp";
            axios.get(query).then(
                function(response) {

                    for (let i = 0; i < response.data.length; i++) {
                        console.log("Where: " + response.data[i].venue.name + ": " + response.data[i].venue.city + ", "  + response.data[i].venue.region + " " + response.data[i].venue.country + "  - When: " + response.data[i].datetime);
                    }
            
                    // console.log(response.data);
                })
        break;

    case "movie-this":
            console.log("");
            console.log("***************Ah, movie info you seek?***************");
            console.log("");
            let queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
            // console.log("this is the url: " + queryUrl);
            // console.log("this is the argument: " + userInput);
            axios.get(queryUrl).then(
                function(response) {
                console.log("The title of the movie is " + response.data.Title);
                console.log("The release year of the movie is " + response.data.Year);
                console.log("The IMDB Rating of the movie is " + response.data.imdbRating);
                console.log("The Rotten Tomatoes score of the movie is " +response.data.Ratings[1].Value);
                console.log("The country the movie was produced in is " + response.data.Country);
                console.log("The languages in the movie are " + response.data.Language);
                console.log("The plot of the movie is: " + response.data.Plot);
                console.log("The actors in the movie are " + response.data.Actors);
                })

        break;

    case "do-what-it-says":

        break;

    default:
        console.log("Liri-Bot Says: Type better next time, Sgt. Clumsy Fingers.");
        break;
}

}

doTheThing(command);


// check if userCommand is "concert-this"
  // run an API call using axios to the bands-in-town API
  // inject the user's search term in the queryURL

  // Display name of venue, venue location, and the date of the event 
  // Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)

// check if userCommand is "spotify-this-song"
  // Using Spotify Node package info and documentation, make a call to the Spotify API using the user's search term

  // Display to the user:
  // * Artist(s)
  // * The song's name
  // * A preview link of the song from Spotify
  // * The album that the song is from

  // Provide a default searchTerm if the user didn't provide an argument

// check if userCommand is "movie-this"

  // Use Axios to call the OMDB API using the user's search term. Use activities 17 and 18 as a reference!

  // Display to the user:
  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.

  // Provide a default search if the user didn't provide an argument.

// check if userCommand is "do-what-it-says" (DO THIS PART OF THE ASSIGNMENT ONLY IF THE OTHER THREE API CALLS WORK WELL!)

  // Use "fs" to read the random.txt file (hint, you will need to require fs! Look at activities 12 and 13)
  // The command will be whatever is before the comma. The search term will be whatever is after the comma.
  // Make the corresponding API call depending on what the command is.

// If the user doesn't provide 1 of the 4 recognizable commands, display message to the user to try again