angular.module('minhasDirectivas',[]).directive('meuPainel',function(){
  return {
    restict:"AE",
    scope : {
      titulo : "@"
    },
    transclude: true,
    templateUrl: "js/directives/meu-painel.html"
  }
});
