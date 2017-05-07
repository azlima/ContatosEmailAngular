var module = angular.module('contato');

module.controller('ContatoCriarCtrl', ['apiUrl', '$scope', '$http', ContatoCriarCtrl]);

function ContatoCriarCtrl(apiUrl, $scope, $http){
    
    $scope.salvar = function(){

        $scope.mensagem = "Enviando os dados...";
        var promise = $http.post(apiUrl + 'api/contatos/', 
            $scope.contato
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu contato foi salvo com sucesso";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
                console.log(response);
            }
        );
    };
}