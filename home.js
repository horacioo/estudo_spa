angular.module('App').controller('MyHome', MyHome);

MyHome.$inject = ['variavel2', '$scope', '$http'];


function MyHome(variavel2, $scope, $http) {
    console.log(variavel2.info);
    $scope.teste = variavel2.info;
    $scope.retorno = "22";

    informacao_externa();

    function informacao_externa() {
        /*
         var dadosx =  $http.post('http://cep.republicavirtual.com.br/web_cep.php?cep=%22+09070330+%22&formato=json').then(response => response.data);
         console.log(dadosx.$$state);
         $scope.retorno = dadosx.$$state.value;
         */
        $http.post('http://cep.republicavirtual.com.br/web_cep.php?cep=%22+09070330+%22&formato=json')
                .then(function (response) {
                    // success handler
                    $scope.retorno = response.data.cidade
                }, function (response) {
                    // error handler
                    console.log(response);
                });
    }
}




