var app = angular.module('itunesSearch', []);
app.controller('searchController', function($http, $log){
    var self=this;
    this.searchTerm ='';
    this.artistData;
    this.getData = function(){
        $http({
            url: "https://itunes.apple.com/search?term="+this.searchTerm+"&callback=JSON_CALLBACK",
            method:"jsonp",
            cache:false
        })
        .then(function(response){
                self.artistData = response.data.results;
                $log.log('success!', self.artistData);
            },
            function(response){
                $log.log('failure...', response);
            });
    };

});