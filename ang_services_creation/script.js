var app = angular.module("sgtApp",[]);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    self.apiKey= '';
    //Create a variable to hold the API url but set it to an empty string
    self.apiURL = '';

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            callAPI: function(){
                var dataObj = {
                    "api_key": self.apiKey
                };

                var dataStr = $.param(dataObj);
                var defer = $q.defer();

                $http({
                    url: self.apiURL,
                    method: 'post',
                    data: dataStr,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(
                    function(response){
                    defer.resolve(response);
                    $log.log('success!', response);
                },
                    function(response){
                    defer.reject('error!', response);
                });
                return defer.promise;
            }
        };
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    sgtDataProvider.apiKey = 'lmCt3vlMNx';
    sgtDataProvider.apiURL = 'http://s-apis.learningfuze.com/sgt/get';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData, $log){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var controllerSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    controllerSelf.data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    controllerSelf.getData = function(){
        sgtData.callAPI()
            .then(function(response){
                $log.log('success from the controller', response);
                controllerSelf.data = response.data;
            },
            function(response){
                $log.log('failure from the controller', response);
            })
    }
});