(function(){
    angular
        .module('githubHelper')
        .factory('GitHubService', GitHubService);

    GitHubService.$inject = ['$http', '$q'];

    function GitHubService($http, $q){
        var baseUrl = 'https://api.github.com/users/';

        return{
            getBaseInfoByUsername: getBaseInfoByUsername
        };

        function getBaseInfoByUsername(userName){
          return $http.get(baseUrl + userName)
                      .then(onSuccess)
                      .catch(onFailure);
        }

        function onSuccess(response){
            return response.data;
        }

        function onFailure(){
            return $q.reject('User not found!');
        }
    }
})();