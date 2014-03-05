'use strict';

module.exports = function (grunt) {
  
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          paths: ['styles/**/*']
        },
        files: {
          'public/css/application.css': 'styles/application.styl'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-resource/angular-resource.min.js',
          'bower_components/angular-route/angular-route.min.js'
        ],
        dest: 'public/js/vendor.js',
      },
      application: {
        src: ['app/app.js', 'app/*/*.js'],
        dest: 'public/js/application.js'
      }
    },

    watch: {
      scripts: {
        files: [
          'app/**/*.js'
        ],
        tasks: ['concat']
      },
      styles: {
        files: [
          'styles/**/*.styl'
        ],
        tasks: ['stylus']
      }
    }
  });

  grunt.registerTask('default', [
    'stylus',
    'concat',
    'watch'
  ]);
};
