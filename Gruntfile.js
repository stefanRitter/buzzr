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
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/masonry/dist/masonry.pkgd.min.js'
        ],
        dest: 'public/js/vendor.js',
      },
      application: {
        src: ['app/app.js', 'app/*/*.js'],
        dest: 'public/js/application.js'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '*.js',
        'worker/**/*.js',
        'server/**/*.js',
        'test/**/*.js'
      ],
      app: [
        'app/**/*.js'
      ]
    },

    watch: {
      scripts: {
        files: [
          '*.js',
          'worker/**/*.js',
          'server/**/*.js',
          'test/**/*.js',
          'app/**/*.js'
        ],
        tasks: ['jshint:all', 'concat:application']
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
    'watch'
  ]);
};
