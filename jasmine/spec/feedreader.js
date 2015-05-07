/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
         
         /* This will loop thru allFeeds object and make sure it has a defined url and
          that it is not empty*/
        it('checks if there is a URL',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });



        /* this loops thur allFeedd object and ensure that it has defined names and is not empty*/

        it('checks if there is a name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

        });

    

/* this will test that the menu element is hidden by defalut*/

    describe('Menu check', function(){
        it('checks if menu is hidden', function(){
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    });
/*these next section will check when button is clicked*/
    describe('checking menu click', function(){
        var menuIcon = $('.menu-icon-link');
        beforeEach(function(){
        menuIcon.click();

        });
        /*click once*/


        it('checks if menu is showing', function(){
            expect($("body").hasClass("menu-hidden")).toBeFalsy();
        });
        /*click again*/

        it('checks if menu is not showing', function(){
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    });

    /*This test ensures when the loadFeed function is called and completes 
    its work, there is at least a single .entry element within 
    the .feed container.*/
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('has added entries', function(done){
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });
    });
        

    /*and this checks to ensure a new feed is loaded and content has changes*/

    describe('New Feed Selection', function(){
        var entries;
        console.log(entries);
        beforeEach(function(done){
            entries = $('.feed a').children('.entry');
            loadFeed(2, done);
        });
        /*After loadFeeds runs .feed should have new entries*/

        it('should be new stuff', function(done){
            expect($('.feed a').children('.entry')).not.toBe(entries);
            done();
        });
        afterAll(function(done){
            loadFeed(0,done);
        });

    });

}());
