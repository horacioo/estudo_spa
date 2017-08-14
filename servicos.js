angular.module('App').service('variavel',function(){//app.service("variavel",function(){
    this.info=["teste","xcvvxcm","weioru"];
    this.cheque="1000";
    this.informacao="apenas um teste"
});





angular.module('App').factory('variavel2',variavel2);

function variavel2(){
    return {
        "info":"teste de factory"
    }
}