var module = angular.module("contato");

module.controller("ContatoListarCtrl", ['apiUrl','$scope', '$http', ContatoListarCtrl]);

function ContatoListarCtrl(apiUrl,$scope, $http){
    
    $scope.mensagem = "Carregando contatos...";
    var promise = $http.get(apiUrl + 'api/contatos/');

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