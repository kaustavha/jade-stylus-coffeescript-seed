# jade-stylus-coffeescript-seed

This is an ultra minimal seed for building static websites with JADE, stylus and coffeescript. GulpJS is used to build. 
The source files are in the src directory. 
Any files in subdirectories inside  ./src of type jade/styl/coffee will get compiled and outputted to ./public, browsersync will then serve up ./public. 
To add images or vendor files(e.g jquery), you can directly add them inside ./public, or add a gulp task to copy from ./src as you see fit. 

## Steps:
From the command line, navigate to the main directory and run, prepend a sudo as you see fit.  
```
npm install
gulp
```
