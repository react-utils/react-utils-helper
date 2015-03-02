var grunt = require('grunt');
grunt.loadNpmTasks('grunt-react');

grunt.initConfig({
  react: {
    dynamic_mappings: {
      files: [
        {
          expand: true,
          cwd: 'src/components/ComponentHelper/',
          src: ['**/*.jsx'],
          dest: 'lib',
          ext: '.js'
        }
      ]
    }
  },
})