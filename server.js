// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Initialize the spotify API client using our client id and secret
// var spotify = new Spotify(keys.spotify);
var express = require("express");
var app = express();
var cors = require('cors')
var SpotifyApi = require('spotify-web-api-node');
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var spotify = new SpotifyApi({
  clientId: '0624a1c68afc4283863103888b6464c5',
  clientSecret: 'fe4d4619ed16422ba113b799eb1ad2ba',
  redirectUri: 'http://spotify-jams.herokuapp.com/'
});

spotify.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotify.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });


app.get("/:playlist", (req, res) => {

  console.log(req.headers)
 
// sample -> 5ieJqeLJjjI8iJWaxeBLuK
  let playlist = req.params.playlist
  console.log("FETCHING MEDIA DATA")

spotify.searchPlaylists(playlist)
  .then(function(data) {
      console.log("RETURNING MEDIA DATA")
      res.json(data)
  }, function(err) {
    console.log('Something went wrong!', err);
  });

})



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
