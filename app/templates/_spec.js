require([
    '<%= path %><%= className %>'

], function(
    ClassUnderTest
) {
    describe('<%= path %><%= className %>', function() {
        var testObject;

        afterEach(function() {
            if (testObject) {
                if (testObject.destroy) {
                    testObject.destroy();
                }

                testObject = null;
            }
        });

        beforeEach(function() {
            testObject = new ClassUnderTest(null);
        });

        describe('Sanity', function() {
            it('should create a <%= className %>', function() {
                expect(testObject).toEqual(jasmine.any(ClassUnderTest));
            });
        });
    });
});