app.factory('PlaylistFactory', function ($http) {

	var PlaylistFactory = {};
	
	PlaylistFactory.create = function(data){
		// $http.post('/api/playlists/', data)
		console.log(data);
		return $http({
			url: './api/playlists/',
			method: "POST",
			data: data
		})
		.then(function(response){
			return response.data;
		})
	};

	return PlaylistFactory;
});