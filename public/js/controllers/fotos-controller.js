angular.module('alurapic').controller('FotosController', function($scope, $http, recursoFoto){
	$scope.fotos = [];

	$scope.filtro = '';

	$scope.mensagem = '';
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});

	//salvarFotos($scope,$http);

	$scope.remover = function(foto){

		recursoFoto.delete({
			fotoId : foto._id
		}, function(){
			var indeceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indeceFoto,1);
			$scope.mensagem = 'Foto '+foto.titulo+' foi removida com sucesso';
		}, function(error){
				$scope.mensagem =  'Erro ao tentar remover '+error

		});
		/*
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
				var indeceFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indeceFoto,1);
				$scope.mensagem = 'Foto '+foto.titulo+' foi removida com sucesso';
		})
		.error(function(error){
				$scope.mensagem =  'Erro ao tentar remover '+error;
		});
		*/
	};

});

var salvarFotos = function($scope ,$http){
	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(error){
		console.log("Erro encontrado"+erro);
	});
}
