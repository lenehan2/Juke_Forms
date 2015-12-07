app.controller('PlaylistCtrl', function($scope, $rootScope, $state,PlaylistFactory){
	//$scope.create = PlaylistFactory.create;
	$scope.createAndReset = function(playlist){
		PlaylistFactory.create(playlist)
		.then(function(playlist){
			console.log(playlist)
			$scope.playlist.name = '';
			$scope.playlistForm.$setPristine();
			$state.go('playlistView',{playlistId: playlist._id});	
		})
	}

	PlaylistFactory.getPlaylists()
	.then(function(playlists){
		$scope.playlists = playlists;
	})
})