angular.module('alurapic').controller('FotosController', function($scope, $http){
	$scope.fotos = [];

	$scope.filtro = '';

	salvarFotos($scope,$http);

	$scope.remover = function(foto){
		$http.delete('/v1/fotos/' + foto._id)
		.success(function(){
			var indeceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indeceFoto,1);
			console.log('Foto '+foto.titulo+' foi removida com sucesso');
		}).error(function(error){
			console.log('Erro ao tentar remover '+error);
		});
	};

});

var salvarFotos = function($scope ,$http){
	$http.get('/v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(error){
		console.log("Erro encontrado"+erro);
	});
}
