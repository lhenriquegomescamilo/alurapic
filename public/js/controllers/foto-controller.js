angular.module('alurapic')
.controller('Fotocontroller', function($scope, $routeParams, recursoFoto, cadastroDeFotos){
  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.fotoId){
    recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
      $scope.foto = foto;
    }, function(error){
      console.log(error);
      $scope.mensagem = 'Não foi possível obeter a foto';
    });
  }
  $scope.submeter = function(){
    if($scope.formulario.$valid){
      cadastroDeFotos.cadastrar($scope.foto)
      .then(function(dados){
        $scope.mensagem = dados.mensagem;
        if(dados.inclusao) $scope.foto = {};
        $scope.$broadcast('fotoCadastrada');
      }).catch(function(dados){
        $scope.mensagem = dados.mensagem;
      });
    }
  };
});
