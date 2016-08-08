angular.module('alurapic').controller('Fotocontroller', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';
    if($routeParams.fotoId){
      $http.get('/v1/fotos/'+$routeParams.fotoId)
      .success(function(foto){
          $scope.foto = foto;
      })
      .error(function(erro){
        console.log(erro);
        $scope.mensagem = 'Não foi possível obter a foto';
      });
    }
    console.log($routeParams.fotoId);

    $scope.submeter = function(){
      if($scope.formulario.$valid){
        $http.post('v1/fotos',  $scope.foto)
        .success(function(){
          $scope.mensagem = 'Foto cadatrada com sucesso';
          $scope.foto = {};
        }).error(function(erro){
          $scope.mensagem = 'Erro ao cadastrar';
        });
      }
    };
});
