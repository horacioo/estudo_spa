var app = angular.module("App",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
            .when("/",{
                templateUrl:"home.html"
            })
            .when("/teste",{
                templateUrl:"teste.html"
            })
            .otherwise({redirectTo :"/"});        
});
