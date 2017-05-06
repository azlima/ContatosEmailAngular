var module = angular.module("contato");

module.controller("ContatoListarCtrl", ['$scope', '$http', ContatoListarCtrl]);

function ContatoListarCtrl($scope, $http){
    
    $scope.mensagem = "Carregando contatos...";
    var promise = $http.get('http://localhost:63233/api/contatos/');

    promise.then(
        // Em caso de sucesso
        function(response){
            if(response.data.length){
                $scope.contatos = response.data;
                $scope.mensagem = null;
            } else {
                $scope.mensagem = "Nenhum contato cadastrado.";
            }
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );    
}