angular.module('minhaFotoDiretiva',[]).directive('minhaFoto',function(){
    return {
      restrict : "E",
      scope : {
        titulo : '@',
        url  :'@',
      },
      template : '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}"></img>'
    }
});
