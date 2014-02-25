/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('dojo-class generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('dojo-class:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function(done) {
    var expected = [
      // add files you expect to exist here.
      'app/test.js',
      'app/tests/spec/Spectest.js'
    ];

    helpers.mockPrompt(this.app, {
      'className': 'test',
      'description': 'test description',
      'path': 'app'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });
});