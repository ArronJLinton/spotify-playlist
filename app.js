window.onSpotifyWebPlaybackSDKReady = () => {
  // const token = 'BQAKKCoc9t1XwtNjoWvKzqTW5N0btCOSBqHYRMwwDLUdxK-8rJzW-Nir1OKdwcx6HaBPrTOj4tMDoCBqRlHYFps0_5G5IF9JMlmO7CDEjCU0ZQ85roIyyNp7HVOoug_eXoBLeuzLwyjAs7646QASY6-0aljsTi6P6bTdNAf64w';
  // const player = new Spotify.Player({
  //   name: 'Web Playback SDK Quick Start Player',
  //   getOAuthToken: cb => { cb(token); }
  // });

  // // Error handling
  // player.addListener('initialization_error', ({ message }) => { console.error(message); });
  // player.addListener('authentication_error', ({ message }) => { console.error(message); });
  // player.addListener('account_error', ({ message }) => { console.error(message); });
  // player.addListener('playback_error', ({ message }) => { console.error(message); });

  // // Playback status updates
  // player.addListener('player_state_changed', state => { console.log(state); });

  // // Ready
  // player.addListener('ready', ({ device_id }) => {
  //   console.log('Ready with Device ID', device_id);
  // });

  // // Not Ready
  // player.addListener('not_ready', ({ device_id }) => {
  //   console.log('Device ID has gone offline', device_id);
  // });

  // // Connect to the player!
  // player.connect();


  // const play = ({
  //   spotify_uri,
  //   playerInstance: {
  //     _options: {
  //       getOAuthToken,
  //       id
  //     }
  //   }
  // }) => {

  //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ uris: [spotify_uri] }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer BQDA7SA4Jt5Oi6GFtiivFnHxe7CxGVVgFNjX6_vC4xUVkXx88R-a_mJmtX4U0I79BLw2Ll1zwqzVfKuh6CU`
  //       },
  //     });
  //   };

  

  // play({
  //   playerInstance: new Spotify.Player({ name: "Arron J" }),
  //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  // });


  	


// Code Sample	
var player = new Spotify.Player({
  name: 'Arron J',
  getOAuthToken: callback => {
    // Run code to get a fresh access token

    callback('BQCU6L73BpbZP9Qwt1UtOWfMbLg-gvAgS4q95PHHmj0t0x6tvNzIx_lex7lbenN0DyJ2Dtekb_ikgNuHOEU');
  },
  volume: 0.5
});

player.connect().then(success => {
  if (!success) {
    console.log('The Web Playback SDK successfully connected to Spotify!');
  }

  player.addListener('ready', ({ device_id }) => {
    console.log('The Web Playback SDK is ready to play music!');
    console.log('Device ID', device_id);
    player.nextTrack().then(() => {
      console.log('Skipped to next track!');
    });
  })
  

  
})


};