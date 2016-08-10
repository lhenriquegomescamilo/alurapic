angular.module('minhasDirectivas',[])
.directive('meuPainel',function(){
  return {
    restrict:"AE",
    scope : {
      titulo : "@"
    },
    transclude: true,
    templateUrl: "js/directives/meu-painel.html"
  }
})
.directive('meuBotaoPerigo', function(){
  return {
    restrict : "E",
    scope : {
      nome : '@',
      acao : '&'
    },
    template : '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'
  }
})
.directive('meuFocus',function(){
  return {
    restrict : "A",
    link : function(scope, element){
      scope.$on('fotoCadastrada',function(){
        element[0].focus();
      });
    }
  }
});
