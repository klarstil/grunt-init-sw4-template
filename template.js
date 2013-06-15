/**
 * grunt-init-sw4-template
 * http://shopware.de
 *
 * Copyright (c) 2013 "klarstil" Stephan Pohl, contributors
 * Licensed under the MIT license.
 */

'use strict';

exports.description = 'Create a Shopware 4.x frontend template.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
    init.process({ type: 'sw4-template' }, [

        // Prompt for these values
        init.prompt('name'),
        init.prompt('title', function(value, data, done) {
            // Fix Shopware capitalization
            value = value.replace(/shopware/gi, 'Shopware');
            done(null, value);
        }),
        init.prompt('description', 'The best Shopware 4.x template ever.'),
        init.prompt('version'),
        init.prompt('homepage'),
        init.prompt('licenses', 'MIT'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('shopware_version', '4')
    ], function(err, props) {
        var files;

        props.dependencies = { jquery: props.jquery_version || '>= 1.9' };
        props.keywords = [];


        // Files to copy (and process).
        files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
            name: 'sw4-frontend-template',
            version: '0.0.0-ignored',
            npm_test: 'grunt qunit',
            node_version: '>= 0.8.0',
            devDependencies: {
                'grunt-contrib-jshint': '~0.1.1',
                'grunt-contrib-qunit': '~0.1.1',
                'grunt-contrib-concat': '~0.1.2',
                'grunt-contrib-uglify': '~0.1.1',
                'grunt-contrib-watch': '~0.2.0',
                'grunt-contrib-clean': '~0.4.0'
            }
        });

        // All done!
        done();
    });
};