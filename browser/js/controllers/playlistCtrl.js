app.controller('PlaylistCtrl', function($scope, PlaylistFactory){
	//$scope.create = PlaylistFactory.create;
	$scope.createAndReset = function(playlist){
		PlaylistFactory.create(playlist)
		.then(function(playlist){
			console.log(playlist)
			$scope.playlist.name = '';
			$scope.playlistForm.$setPristine()
		})
	}
})