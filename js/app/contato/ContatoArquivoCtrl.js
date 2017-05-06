var module = angular.module('contato');

module.controller('ContatoArquivoCtrl',['$scope', '$http', '$routeParams', ContatoArquivoCtrl]);

function ContatoArquivoCtrl($scope, $http, $routeParams) {
   
    $scope.mensagem = "Enviando os dados...";
    var contatoid = $routeParams.id;

    var promise = $http.get('http://localhost:63233/api/contatos/arquivo/' + contatoid);

    promise.then(
        // Em caso de sucesso
        function(response){
            saveAs( data2blob(response.data), "Email.txt" );
            $scope.mensagem = "Seu arquivo foi gerado com sucesso.";
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
}

function data2blob(data, isBase64) {
  var chars = "";

  if (isBase64)
    chars = atob(data);
  else
    chars = data;

  var bytes = new Array(chars.length);
  for (var i = 0; i < chars.length; i++) {
    bytes[i] = chars.charCodeAt(i);
  }

  var blob = new Blob([new Uint8Array(bytes)]);
  return blob;
}