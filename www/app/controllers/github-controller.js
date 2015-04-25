(function(){
    angular
        .module('githubHelper')
        .controller('GitHubController', GitHubController);

    function GitHubController(){
        var vm = this;
        vm.title = "Hello"

    }
})();