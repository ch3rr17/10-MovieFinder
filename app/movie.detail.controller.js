(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$log', 'MovieFactory', '$stateParams'];



    /* @ngInject */
    function DetailController($log, MovieFactory, $stateParams) {
        var vm = this;
        vm.title = 'DetailController';
        vm.movie = '';
        
            

            vm.movieDetails = function(){
                //var url = "http://www.omdbapi.com/?t=" + $stateParams.movieName;
                MovieFactory.specificSearch(movie).then(
                    
                    function(response) {
                        vm.details = response.data;
                        console.log(vm.title);
                        
                    },
                    function(error) {
                        $log.error(error);
                    });
                vm.movieDetails();
            };
            

            

    


    }
})();
