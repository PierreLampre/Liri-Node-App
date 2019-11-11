//require statements
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var fs = require("fs");


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

let dataArr;

function runTheProgram(command) {

switch(command) {
    case "spotify-this-song":

   function heyHeySpotify(userInput) {

        if (userInput === "") {
            userInput = "never gonna give you up"
        }

            var spotify = new Spotify(keys.spotify);
            console.log("");
            console.log("***************Ah, music info you seek?***************");
            console.log("");
            spotify.search({ type: 'track', query: userInput, limit: 5 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
            for (let i = 0; i < data.tracks.items.length; i++) {
              console.log("-------------------------------------------------------")
              console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
              console.log("Track Name: " + data.tracks.items[i].name);
              console.log("Preview URL: " + data.tracks.items[i].preview_url);
              console.log("Album: " + data.tracks.items[i].album.name); 
              console.log("-------------------------------------------------------")
            }
           
              
              });
    
        }

        heyHeySpotify(userInput);
        break;

    case "concert-this":

            if (userInput === "") {
                userInput = "Piebald"
            }

            console.log("");
            console.log("***************Ah, concert info you seek?***************");
            console.log("");
            let query = "https://rest.bandsintown.com/artists/" + userInput + "/events/?app_id=codingbootcamp";
            axios.get(query).then(
                function(response) {

                    console.log("== Current Tour Dates for " + response.data[0].artist.name + " ==");
                    console.log("");

                    for (let i = 0; i < response.data.length; i++) {
                        console.log("Where: " + response.data[i].venue.name + ": " + response.data[i].venue.city + ", "  + response.data[i].venue.region + " " + response.data[i].venue.country + "  - When: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    }
            
                    // console.log(response.data);
                })
        break;

    case "movie-this":

            if(userInput === "") {
                userInput = "body of evidence"
            }
                
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


            fs.readFile("random.txt", "utf8", function(error, data) {

                if (error) {
                  return console.log(error);
                }

                dataArr = data.split(",");
                console.log(dataArr);
                heyHeySpotify(dataArr[1]);

              });
              

        break;

    default:
        console.log("Liri-Bot Says: Type better next time, Sgt. Clumsy Fingers.");
        break;
}

}

runTheProgram(command);