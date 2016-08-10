angular.module('alurapic',['minhasDirectivas','minhaFotoDiretiva','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);
});
