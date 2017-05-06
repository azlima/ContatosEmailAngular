var module = angular.module('contato');

module.controller('ContatoDetalheCtrl',['$scope', '$http', '$routeParams', ContatoDetalheCtrl]);

function ContatoDetalheCtrl($scope, $http, $routeParams) {
   
    var id = $routeParams.id;

    var promise = $http.get('http://localhost:63233/api/contatos/' + id);

    promise.then(
        // Em caso de sucesso
        function(response){
            $scope.contato = response.data;
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
}