app.controller('singlePlaylistCtrl',function($scope,SinglePlaylistFactory,thePlaylist, SongFactory, theSongs, PlaylistFactory){

	$scope.playlist = thePlaylist;

	$scope.getPlaylist = function(id){
		console.log("We got playlist")
		SinglePlaylistFactory.getPlaylist(id)
		.then(function(playlist){
			$scope.playlist = playlist;
		})
	}

	$scope.songs = theSongs;
	console.log($scope.songs)

	$scope.addSong = function(song, playlist){
		PlaylistFactory.addSong(song, playlist)
		.then(function(){
			return SinglePlaylistFactory.getPlaylist(song._id)
		})
		.then(function(playlist){
			console.log(playlist)
		 });
	}

	// SongFactory.getAllSongs()
	// .then(function(songs){
	// 	$scope.songs = songs;
	// })

})