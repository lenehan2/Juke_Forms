app.factory('PlaylistFactory', function ($http, $rootScope) {

	var PlaylistFactory = {};
	var cachedPlaylist = [];
	
	PlaylistFactory.create = function(data){
		// $http.post('/api/playlists/', data)
		console.log(data);
		return $http({
			url: './api/playlists/',
			method: "POST",
			data: data
		})
		.then(function(response){
			var playlist = response.data;
			cachedPlaylist.push(playlist);
			return playlist;
		})
	};

	PlaylistFactory.getPlaylists = function(){
		return $http({
			url: "./api/playlists",
			method: "GET"
		}).then(function(response){
			angular.copy(response.data, cachedPlaylist)
			return cachedPlaylist;
		})
	}

	return PlaylistFactory;
});