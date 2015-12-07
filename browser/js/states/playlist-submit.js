app.config(function($stateProvider){
	$stateProvider.state('playlist-submit',{
		url: '/playlists/new',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl'
	})
})