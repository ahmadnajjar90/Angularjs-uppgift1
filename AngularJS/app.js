  
let app = angular.module("myApp", ["ngRoute"])

app.directive("appheader", function() {
    return {
        template: '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="#"><img src="images/logo2.png" width="99px"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a><a class="nav-item nav-link" href="#!features">Features</a><a class="nav-item nav-link" href="#!prices">Prices</a><a class="nav-item nav-link" href="#!about">About us</a></div></div></nav>'
    }
})

app.directive("appfooter", function(){
    return {
        template: '<footer class="myfooter bg-dark"><div class="text-center py-2">© 2020 Copyright: AMN</div></footer>'
    }
})


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html"
    })
    .when("/features", {
        templateUrl: "views/features.html"
    })
    .when("/prices", {
        templateUrl: "views/prices.html"
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "myController2" 
    })
})

app.controller("myController2", function($scope) {
    $scope.persons = [
        { image: "person1.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "person1.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet" },
        { image: "person1.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet....." },
    ]
});


app.controller("prisController", function($scope) {

    $scope.month = function() {
        $scope.pris = "  month for 100kr";
    }

    $scope.year = function() {
        $scope.pris = "year for 1000kr";
    }
});