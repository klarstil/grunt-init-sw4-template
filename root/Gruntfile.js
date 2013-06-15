/**
 * grunt-init-sw4-template
 * http://shopware.de
 *
 * Copyright (c) 2013 "klarstil" Stephan Pohl, contributors
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: [ 'frontend/_resources/css' ]
                },
                files: {
                    "frontend/_resources/css/<%= pkg.name %>.css": "frontend/_resources/css/less/<%= pkg.name %>.less"
                }
            },
            production: {
                options: {
                    paths: [ 'frontend/_resources/css' ],
                    yuicompress: true
                },
                files: {
                    "frontend/_resources/css/<%= pkg.name %>.css": "frontend/_resources/css/less/<%= pkg.name %>.less"
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [ 'frontend/_resources/javascript/src/**/*.js' ],
                dest: 'frontend/_resources/javascript/jquery.<%= pkg.name %>.min.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'frontend/_resources/javascript/jquery.<%= pkg.name %>.min.js': [ '<%= concat.dist.dest %>' ]
                }
            }
        },

        jshint: {
            files: [
                'Gruntfile.js',
                'frontend/_resources/javascript/src/**/*.js',
                'frontend/_resources/javascript/test/**/*.js'
            ],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    window: true,
                    document: true
                }
            }
        },
        qunit: {
            all: [ 'frontend/_resources/javascript/test/**/*.html' ]
        },

        watch: {
            files: [ '<%= jshint.files %>' ],
            tasks: [ 'jshint', 'qunit', 'less:development' ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', [ 'jshint', 'qunit' ]);

    grunt.registerTask('default', [ 'jshint', 'qunit', 'less:production', 'concat', 'uglify' ]);
};