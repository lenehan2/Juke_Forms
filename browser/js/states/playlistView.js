app.config(function($stateProvider){
	$stateProvider.state('playlistView',{

		url: '/playlists/:playlistId',
		templateUrl: '/templates/singlePlaylistTemplate.html',
		controller: 'singlePlaylistCtrl',
		resolve: {
			thePlaylist: function($stateParams,SinglePlaylistFactory){
				// console.log("STATE PARAMS: ",$stateParams.playlistId)
				return SinglePlaylistFactory.getPlaylist($stateParams.playlistId);
			}
		}
	})
})