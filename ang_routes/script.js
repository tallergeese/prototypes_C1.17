// Create the route module and name it routeApp
var app = angular.module("routeApp", ["ngRoute"]);

// Config the routes
app.config(function($routeProvider){
$routeProvider
.when('/',{
    templateUrl:'pages/home.html',
    controller: 'homeController as hc'
})
.when('/about',{
    templateUrl:'pages/about.html',
    controller: 'aboutController as ac'
})
.when('/contact',{
    templateUrl: 'pages/contact.html',
    controller: 'contactController as cc'
})
.otherwise({
    redirectTo: '/'
})
});

// Create the controllers for the different pages below

// home page controller
app.controller('homeController', function(){
// Create a message to display in the view
this.message = "WELCOME! TO ZOMBO.COM!";
});

// about page controller
app.controller('aboutController', function(){
// Create a message to display in the view
this.message = "EVERYTHING is possible at ZOMBO.COM!";

});
// contact page controller
app.controller('contactController', function(){
this.message = "Dreams come true... at ZOMBO.COM!";
// Create a message to display in the view
});
