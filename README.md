#jade-stylus-coffeescript-seed

This is an ultra minimal seed for building static websites with JADE, stylus and coffeescript. GulpJS is used to build. 
The source files are in the src directory.
The gulpfile only compiles the three src files with their current names, no directory walker or options for multiple sources is included currently. 

## Steps:
From the command line, navigate to the main directory and run
'''
npm install
'''
'''
gulp
'''

Gulp returns an index.html in the main directory, and scripts.js and styles.css in the assets directory. It will also watch  files in the src directory for changes and recompile. 