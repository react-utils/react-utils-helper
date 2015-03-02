grunt.loadNpmTasks('grunt-react');

grunt.initConfig({
  react: {
    dynamic_mappings: {
      files: [
        {
          expand: true,
          cwd: 'path/to/jsx/templates/dir',
          src: ['components/ComponentHelper/**/*.jsx'],
          dest: 'lib',
          ext: '.js'
        }
      ]
    }
  },
})