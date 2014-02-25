require([
    '<%= path %><%= className %>'

], function(
    ClassUnderTest
) {

    var testObject;

    afterEach(function() {
        if (testObject) {
            if (testObject.destroy) {
                testObject.destroy();
            }

            testObject = null;
        }
    });

    describe('<%= path %><%= className %>', function() {
        describe('Sanity', function() {
            beforeEach(function() {
                testObject = new ClassUnderTest(null);
            });

            it('should create a <%= className %>', function() {
                expect(testObject).toEqual(jasmine.any(ClassUnderTest));
            });
        });
    });
});