module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {},
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 5 versions']
            },
            files: {
                src: "css/style.css"
            }
        },

        concat: {
            iconcss: {
                src: [
                    'css/spritestyles.css'
                ],
                dest: 'less/icon.less'
            },
            css: {
                src: [
                    'css/libs/*'
                ],
                dest: 'css/libs.css'
            },
            js: {
                src: [
                    'js/libs/*'
                ],
                dest: 'js/libs.js'
            }
        },

        sprite: {
            normal: {
                src: 'img/raw/*.png',
                dest: 'img/spritesheet.png',
                destCss: 'css/spritestyles.css',
                padding: 2
            }
        },

        watch: {
            sprite:{
                files: ['img/raw/*.png'],
                tasks: ['sprite', 'concat', 'less', 'concat'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['less/*.less', 'css/spritestyles.css'],
                tasks: ['less', 'autoprefixer', 'concat'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sprite', 'less', 'autoprefixer', 'concat', 'watch']);

};