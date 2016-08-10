angular.module('alurapic',['minhasDirectivas','minhaFotoDiretiva','ngAnimate','ngRoute','meusServicos'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);
});
