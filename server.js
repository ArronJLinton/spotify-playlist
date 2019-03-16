// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the node-spotify-api NPM package.
// var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
// var spotify = new Spotify(keys.spotify);
var SpotifyApi = require('spotify-web-api-node');
var spotify = new SpotifyApi({
  clientId: '0624a1c68afc4283863103888b6464c5',
  clientSecret: 'fe4d4619ed16422ba113b799eb1ad2ba',
  redirectUri: 'http://spotify-jams.herokuapp.com/'
});
var express = require("express");

var app = express();

var cors = require('cors')

const PORT = process.env.PORT || 3000;

// app.use(cors())
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get('/', function(req, res) {
  
//   var scopes = 'user-read-private user-read-email';
//   const redirect_uri = "https://git.heroku.com/spotify-jams.git"
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=0624a1c68afc4283863103888b6464c5&scope=' + encodeURIComponent(scopes) +
//     '&redirect_uri=https://spotify-jams.herokuapp.com/spotify');
//   });

app.get("/", (req, res) => {
 

  var getArtistNames = function(artist) {
    return artist.name;
  };

  let songName;

  // console.log("REQ.PARAMS: ", req.params);
  if (songName === undefined) {
    songName = "What's my age again";
  }

  spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }).catch(function(err) {
    console.log('Something went wrong!', err);
  });
  
  // axios.get("https://api.spotify.com/v1/playlists/6rqhFgbbKwnb9MLmUQDhG6", {
  //   "grant_type":    "authorization_code",
  //   "code":          code,
  //   "redirect_uri":  myurl,
  //   "client_secret": mysecret,
  //   "client_id":     myid,
  // }).then((results) => {
  //     // if (err) {
  //     //   console.log("Error occurred: " + err);
  //     //   return;
  //     // }
  //     console.log("DATA: ", results);
  //   //   var songs = data.tracks.items;

  //   //   for (var i = 0; i < songs.length; i++) {
  //   //     console.log(i);
  //   //     console.log("artist(s): " + songs[i].artists.map(getArtistNames));
  //   //     console.log("song name: " + songs[i].name);
  //   //     console.log("preview song: " + songs[i].preview_url);
  //   //     console.log("album: " + songs[i].album.name);
  //   //     console.log("-----------------------------------");
  //   //   }
  //   // }
  // }).catch((err) => {
  //   console.log(err)
  // })

})



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
