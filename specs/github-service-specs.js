describe('The GitHubService', function(){

    var sampleSearchTerm = 'BTroncone',
        errorMessage = "User not found!",
        mockResponse = [{}];

    beforeEach(function(){
        bard.appModule('githubHelper');
        bard.inject('GitHubService', '$q', '$httpBackend');
        //hack to prevent template caching from failing test
        //http://stackoverflow.com/questions/29424792/why-does-httpbackend-flush-result-in-unexpected-request
        $httpBackend.whenGET(/^\app\//).respond(200, '');
    });

    it('should exist as a service', function(){
        expect(GitHubService).toBeDefined();
    });

    it('should call https://api.github.com/users/ + username when getBaseInfoByUsername is called', function(){
        $httpBackend.when('GET', 'https://api.github.com/users/' + sampleSearchTerm)
                    .respond(200, mockResponse);

        GitHubService.getBaseInfoByUsername(sampleSearchTerm).then(function(data){
            expect(data.length).toBe(mockResponse.length);
        });

        $httpBackend.flush();
    });

    it('should return an error message of "User not found!" when nothing is returned', function(){
        $httpBackend.when('GET', 'https://api.github.com/users/' + sampleSearchTerm)
                    .respond(500, {description: errorMessage});

        GitHubService.getBaseInfoByUsername(sampleSearchTerm).catch(function(error){
            expect(error).toBe(errorMessage);
        });

        $httpBackend.flush();
    });
});