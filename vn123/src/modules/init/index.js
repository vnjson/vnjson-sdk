/**
 * init
 */
vnjs.init = function (param){
  let { emit, option, getScreens, parse } = this;
  options = param;
  console.log("init")
/*
getScreens('/game/screens.html')
    .then(function(html){
      document
        .querySelector(option.screen)
        .innerHTML = html;
        let screensArr = document.getElementsByClassName('vnjson__screen');
        for(let i=1; i>=screensArr.length;i++){
          let screenName = screensArr[i].id.split('vnjson__')[1];
          emit.call(screenName);
          console.log('emit: '+screenName)
        }
 
        emit('autorun', {name: 'autorun'});
        emit.call(vnjs, 'jump', option.entry);
    })
    .catch(function(err){
      console.error(err);
    });*/
};