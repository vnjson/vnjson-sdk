const { parallel, src, dest, watch, series } = require('gulp');
const { join, resolve, basename } = require('path');

const
  webpack         = require('webpack'),
  webpackConfig   = require('./webpack.config'),
  sass            = require('gulp-sass'),
  fs              = require('fs');


sass.compiler   = require('node-sass');

/*
 * SCSS
 */
function styles (cb){
 return src('./src/scss/**.{scss,css}')
       .pipe(sass.sync().on('error', sass.logError))
       .pipe(dest('./app/css/'));
  cb();
}

/**
 * Vue
 */


function screens (cb){
  webpack(webpackConfig, (err, stats) => { 
  if(stats.hasErrors()) {
   
    const info = stats.toJson();
    info.errors.map(errorobj=>{
       console.log(errorobj.message)
    })
    cb();
  }
  else{
    cb();
  }

  
});

}



/**
 * WATCH
 */

function watchDir(cb) {
  //watch('./src/**/*.scss', styles);
  watch('./src/*.{vue,js}', screens);
  watch('./src/**/*.{vue,js}', screens);
  cb();
};

exports.default =  series(watchDir);