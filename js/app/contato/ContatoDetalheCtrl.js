var module = angular.module('contato');

module.controller('ContatoDetalheCtrl',['apiUrl', '$scope', '$http', '$routeParams', ContatoDetalheCtrl]);

function ContatoDetalheCtrl(apiUrl, $scope, $http, $routeParams) {
   
    var id = $routeParams.id;

    var promise = $http.get(apiUrl + 'api/contatos/' + id);

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