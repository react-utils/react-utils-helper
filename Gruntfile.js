var grunt = require('grunt');
grunt.loadNpmTasks('grunt-react');
grunt.loadNpmTasks('grunt-es6-transpiler');


grunt.initConfig({
  react: {
    dynamic_mappings: {
        options: {
          harmony: true
        },
        
          expand: true,
          cwd: 'src/components/ComponentHelper/',
          src: ['**/*.jsx'],
          dest: 'lib',
          ext: '.js'
        
    }

  }

}); 
 
