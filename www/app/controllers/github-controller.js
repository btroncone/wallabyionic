(function(){
    angular
        .module('githubHelper')
        .controller('GitHubController', GitHubController);

    GitHubController.$inject = ['GitHubService'];

    function GitHubController(GitHubService){
        var vm = this;

        vm.searchTerm = "";
        vm.userInfo = {};
        vm.getUserInfo = getUserInfo;

        function getUserInfo(){
            GitHubService.getBaseInfoByUsername(vm.searchTerm)
                         .then(success, failure);

            function success(userInfo){
                vm.userInfo = userInfo;
            }

            function failure(error){
                console.log(error);
            }
        }

    }
})();