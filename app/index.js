'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var DojoClassGenerator = yeoman.generators.Base.extend({
  init: function() {

  },

  askFor: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic dojo-class generator.'));

    var prompts = [{
      name: 'className',
      message: 'Class Name:',
      default: 'ClassName'
    }, {
      name: 'description',
      message: 'Description:'
    }, {
      name: 'path',
      message: 'Path to class:',
      default: 'app'
    }];

    this.prompt(prompts, function(props) {
      this.className = props.className;
      this.description = props.description;
      this.path = props.path + '/';
      this.consoleLog = this.path + this.className;
      this.packageName = this.path.split('/')[0];

      done();
    }.bind(this));
  },

  app: function() {
    this.template('_class.js', this.path + this.className + '.js');
    this.template('_spec.js', this.path + 'tests/spec/Spec' + this.className + '.js');
  },

  projectfiles: function() {

  }
});

module.exports = DojoClassGenerator;