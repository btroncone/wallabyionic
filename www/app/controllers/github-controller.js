(function(){
    angular
        .module('githubHelper')
        .controller('GitHubController', GitHubController);

    GitHubController.$inject = ['GitHubService', '$ionicPopup'];

    function GitHubController(GitHubService, $ionicPopup){
        var vm = this;

        vm.searchTerm = "";
        vm.userInfo = null;
        vm.getUserInfo = getUserInfo;

        function getUserInfo(){
            GitHubService.getBaseInfoByUsername(vm.searchTerm)
                         .then(success, failure);

            function success(userInfo){
                vm.userInfo = userInfo;
            }

            function failure(error){
                var alertPopup = $ionicPopup.alert({
                    title: error
                });
                alertPopup.then(function() {
                    console.log('Popup dismissed!');
                });

            }
        }

    }
})();