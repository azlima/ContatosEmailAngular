var module = angular.module('contato');

module.controller('ContatoEditarCtrl', ['apiUrl', '$scope', '$http', '$routeParams', ContatoEditarCtrl]);

function ContatoEditarCtrl(apiUrl, $scope, $http, $routeParams){

    var id = $routeParams.id;

    var promise = $http.get(apiUrl + 'api/contatos/' + id);

    promise.then(
        function(response){        
            $scope.contato = response.data;
        }
    );
    
    $scope.salvar = function(){
        $scope.mensagem = "Enviando os dados...";

        var promise = $http.put(
            apiUrl + 'api/contatos/' + $scope.contato.Id, 
            $scope.contato
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu contato foi salvo com sucesso.";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}