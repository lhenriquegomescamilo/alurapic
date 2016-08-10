angular.module('alurapic')
.controller('Fotocontroller', function($scope, $http, $routeParams,recursoFoto){
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
      $scope.submeter = function(){
        if($scope.formulario.$valid){
          if($scope.foto._id){
              recursoFoto.update({fotoId : $scope.foto._id},$scope.foto, function(){
                $scope.mensagem = "Alterado com sucesso";
              }, function(error){
                console.log(error);
                $scope.mensagem = 'Não foi possível alterar a foto '+$scope.foto.titulo;
              });
          } else {
            $http.post('v1/fotos',  $scope.foto)
            .success(function(){
              $scope.mensagem = 'Foto cadatrada com sucesso';
              $scope.foto = {};
            }).error(function(erro){
              $scope.mensagem = 'Erro ao cadastrar';
            });
          }
        }
    };
});
