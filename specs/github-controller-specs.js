describe('The github controller', function(){

    var githubController;
    beforeEach(bard.appModule('githubHelper'));

    beforeEach(function(){
        bard.inject('$controller');
        githubController = $controller('GitHubController');
    });

    it('should exist', function(){
        expect(githubController).toBeDefined();
    });

    it('should contain a title of test', function(){
        expect(githubController.title).toBe("Hello")
    });
});