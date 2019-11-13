# Liri-Node-App

This is a node cli application that leverages one of three different API's, dependent upon which command the user inputs.

This app makes the following information readily available:

    - A set of facts about any film in the OMDB
    ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
     - A set of facts about any songs in the Spotify API data
     ```
       * Artist(s)
       * The song's name
       * A preview link of the song from Spotify
       * The album that the song is from
     ```
    - Current tour information for an artist, via the BandsInTown API
     ```
       * Name of the venue
       * Venue location
       * Date of the Event (use moment to format this as "MM/DD/YYYY") 
     ```

By inputting text in the following manner inside a bash window opened inside the file's containing folder (and of course, pressing enter), the user can make requests of the APIs like so: 
      
      * node liri movie-this <film name>
      * node liri spotify-this-song <song name>
      * node liri concert-this <artist name>
      
This app is pure js and requires the following packages:

      * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

      * [Axios](https://www.npmjs.com/package/axios)

      * [Moment](https://www.npmjs.com/package/moment)

      * [DotEnv](https://www.npmjs.com/package/dotenv) 

Built by Justin Lampe under the instruction of Penn LPS Coding Bootcamp

Here is a link to a video that shows how the app functions:

         https://drive.google.com/file/d/1g-uDlcDNN6v6W4GG9KvtAxeUvljbRkJ3/view

