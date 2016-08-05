angular.module('alurapic').controller('Fotocontroller', function($scope,$http){
    $scope.foto = {};
    $scope.mensagem = '';
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
