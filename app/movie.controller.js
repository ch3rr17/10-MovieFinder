(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieFinderController', MovieFinderController);

    MovieFinderController.$inject = ['$log', 'MovieFactory'];

    /* @ngInject */
    function MovieFinderController($log, MovieFactory) {
        var vm = this;
        vm.title = 'MovieFinderController';
        vm.movie = '';
        

       	vm.searchMovie = function() {        
           	MovieFactory.movieSearch(vm.movie).then(
                function(response) {
                    vm.movies = response.data;
                    console.log(vm.movies);
                },
                function(error) {
                    $log.error('failure getting movies', error);
                });
        }; // end of searchMovie function

        vm.searchMovie();

    }//end of controller
})();