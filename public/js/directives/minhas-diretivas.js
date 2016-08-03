angular.module('minhasDiretivas',[]).direcitve('meuPainel',function(){
	var ddo = {};
	ddo.restrict = "AE";

	ddo.scope =  {
		titulo : '@titulo',
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-panel.html'

	return ddo;
});