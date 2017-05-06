var module = angular.module('contato');

module.controller('ContatoRemoverCtrl', ['$scope', '$http', '$routeParams', ContatoRemoverCtrl]);

function ContatoRemoverCtrl($scope, $http, $routeParams) {
    
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
    
    $scope.remover = function(){
        $scope.mensagem = 'Enviado os dados...';

        var promise = $http.delete('http://localhost:63233/api/contatos/' + $scope.contato.Id);

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.contato = {};
                $scope.mensagem = 'Seu contato foi apagado com sucesso.';
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    }
}