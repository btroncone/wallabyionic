describe('The GitHubController', function(){

    var GitHubController,
        sampleSearchTerm = 'BTroncone',
        mockUser = [{}];

    beforeEach(function(){
        bard.appModule('githubHelper');
        bard.inject('$controller', '$q', '$rootScope', '$ionicPopup', 'GitHubService');
        bard.mockService(GitHubService,{
            getBaseInfoByUsername: $q.when(mockUser)
        });
        GitHubController = $controller('GitHubController');
    });

    it('should exist', function(){
        expect(GitHubController).toBeDefined();
    });

    describe('the search process', function(){

        beforeEach(function(){
           GitHubController.searchTerm = sampleSearchTerm;
        });

        it('should call the GitHubService with the appropriate search term', function(){
            GitHubController.getUserInfo();
            expect(GitHubService.getBaseInfoByUsername).toHaveBeenCalledWith(GitHubController.searchTerm);
        });

        it('should populate the userDetails object with the results of the search', function(){
            GitHubController.getUserInfo();
            $rootScope.$apply();
            expect(GitHubController.userInfo.length).toBe(mockUser.length)
        });

    });

});