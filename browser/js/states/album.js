app.config(function ($stateProvider) {
	$stateProvider.state('album', {
		url: '/albums/:albumId',
		templateUrl: '/templates/album.html',
		controller: 'AlbumCtrl',
		resolve: {
			theAlbum: function (AlbumFactory, $stateParams) {
				console.log($stateParams)
				return AlbumFactory.fetchById($stateParams.albumId);
			}
		}
	});
});