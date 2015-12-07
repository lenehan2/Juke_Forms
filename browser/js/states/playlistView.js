app.config(function($stateProvider){
	$stateProvider.state('playlistView',{

		url: '/playlists/:playlistId',
		templateUrl: '/templates/singlePlaylistTemplate.html',
		controller: 'singlePlaylistCtrl',
		resolve: {
			thePlaylist: function($stateParams,SinglePlaylistFactory){
				// console.log("STATE PARAMS: ",$stateParams.playlistId)
				return SinglePlaylistFactory.getPlaylist($stateParams.playlistId);
			},
			theSongs: function(SongFactory){
				// console.log("were at resolve")
				// console.log("ALL SONGS",SongFactory.getAllSongs())
				return SongFactory.getAllSongs();
			}
		}
	})
})