var playlist = {
<<<<<<< HEAD
  john: 'gravity',
  maroon: 'wait'
}


function updatePlaylist (playlistObject, artistName, songTitle) {
  
 return playlistObject[artistName] = songTitle
  
}
function removeFromPlaylist(playlistObject,artistName){
  delete playlistObject[artistName]
  return playlistObject
}
=======
  john: 'gravity'
}

 function updatePlaylist (playlistObject, artistName, songTitle) {
 Object.assign({playlist}, playlistObject, {[artistName]: songTitle });

}
/* function removeFromPlaylist(playlist,artistName){
  return delete playlist.artistName;
}
*/

console.log(updatePlaylist('playlist', 'Maroon', 'Wait'));
>>>>>>> cef634b0c5434e2c62e220ce2c28fff8479ecdd7
