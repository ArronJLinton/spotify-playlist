/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
window.onSpotifyWebPlaybackSDKReady = () => {


var client_id = '0624a1c68afc4283863103888b6464c5'; // Your client id
var client_secret = 'fe4d4619ed16422ba113b799eb1ad2ba'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (client_id + ':' + client_secret).toString('base64')
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true,
  method: 'POST'
};

$.ajax(authOptions).then((results) => {
  // if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = results.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/lintonarron',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true,
      method: 'GET'
    };
    $.ajax(options).then(function(body) {
      console.log(body);
    });
  // }
});

};