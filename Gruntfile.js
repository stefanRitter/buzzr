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

    ngmin: {
      app: {
        src: ['app/app.js', 'app/*/*.js'],
        dest: 'public/js/application.js'
      },
      admin: {
        src: ['app/app.js', 'app/*/*.js'],
        dest: 'public/js/admin.js'
      }
    },

    uglify: {
      app: {
        files: {
          'public/js/application.js': ['public/js/application.js']
        }
      },
      admin: {
        files: {
          'public/js/admin.js': ['public/js/admin.js']
        }
      }
    },

    concat: {
      options: {
        separator: ''
      },
      vendor: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-resource/angular-resource.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'public/js/twitter-widget.js'
        ],
        dest: 'public/js/vendor.js',
      },
      application: {
        src: ['public/js/vendor.js', 'public/js/application.js'],
        dest: 'public/js/application.js'
      },
      admin: {
        src: ['public/js/vendor.js', 'public/js/admin.js'],
        dest: 'public/js/admin.js'
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
        'app/**/*.js',
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
        tasks: ['jshint:all', 'ngmin:app', 'ngmin:admin', 'uglify:app', 'uglify:admin', 'concat:admin', 'concat:application']
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
