app.controller('singlePlaylistCtrl',function($scope,SinglePlaylistFactory,thePlaylist){

	$scope.playlist = thePlaylist;

	$scope.getPlaylist = function(id){
		console.log("We got playlist")
		SinglePlaylistFactory.getPlaylist(id)
		.then(function(playlist){
			$scope.playlist = playlist;
		})
	}

	// $scope.isCurrent = function (playlist) {
	// 	var current = PlayerFactory.getCurrentSong();
	// 	return current && current._id == song._id;
	// };
	// $scope.start = function (song) {
	// 	PlayerFactory.start(song, $scope.album.songs);
	// };

	// $scope.generateMailTo = function () {
	// 	if (!$scope.album) return;
	// 	var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + $scope.album._id;
	// 	return 'mailto:?subject=' + $scope.album.name + '&body=' + link;
	// };

	// $scope.toFrequency = function (str) {
 //    str = str || '';
 //    return str.split('').reduce(function (freq, char) {
 //        char = char.toLowerCase();
 //        freq[char] = (freq[char] || 0);
 //        freq[char]++;
 //        return freq;
 //   		 }, {});
	// };
	



})