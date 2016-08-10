angular.module('alurapic').config(function($routeProvider){
  $routeProvider.when('/fotos', {
      templateUrl : 'partials/principal.html',
      controller : 'FotosController'
  });

  $routeProvider.when('/fotos/new', {
      templateUrl : 'partials/foto.html',
      controller : 'Fotocontroller'
  });

  $routeProvider.when('/fotos/edit/:fotoId',{
    templateUrl : 'partials/foto.html',
    controller : 'Fotocontroller'
  });

  $routeProvider.otherwise({redirectTo : '/fotos'});
});
