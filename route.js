app.config(function($routeProvider){
    $routeProvider
            .when("/",{
                controller: 'Home',
                templateUrl:"home.html"
            })
            .when("/teste",{
                templateUrl:"teste.html"
            })
            .otherwise({redirectTo :"/"});        
});