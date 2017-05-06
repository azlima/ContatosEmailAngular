var module = angular.module('contato', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'ContatoListarCtrl',
            templateUrl: 'template/listar.html'
        })
        .when('/criar', {
            controller: 'ContatoCriarCtrl',
            templateUrl: 'template/criar.html'
        })
        .when('/detalhes/:id', {
            controller: 'ContatoDetalheCtrl',
            templateUrl: 'template/detalhes.html'
        })
        .when('/editar/:id', {
            controller: 'ContatoEditarCtrl',
            templateUrl: 'template/editar.html'
        })
        .when('/remover/:id', {
            controller: 'ContatoRemoverCtrl',
            templateUrl: 'template/remover.html'
        })
		.when('/arquivo/:id', {
            controller: 'ContatoArquivoCtrl',
            templateUrl: 'template/arquivo.html'
        });
}]);