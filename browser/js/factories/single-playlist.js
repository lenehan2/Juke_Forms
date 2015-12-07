app.factory('SinglePlaylistFactory',function($http){

	var SinglePlaylistFactory = {};

	SinglePlaylistFactory.getPlaylist = function(id){
		console.log("ID:",id)
		return $http.get('api/playlists/'+id)
		.then(function(response){
			console.log("RESPONSE",response)
			return response.data;
		})
	}
	
	return SinglePlaylistFactory;

})