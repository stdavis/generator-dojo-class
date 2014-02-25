define([
    'dojo/_base/declare'

], function(
    declare
) {
    return declare(null, {
        // description:
        //      <%= description %>


        // Properties to be sent into constructor

        constructor: function () {
            // summary:
            //      description
            console.log('<%= consoleLog %>::constructor', arguments);
        
        }
    });
});