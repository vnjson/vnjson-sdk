vnjs.getScreens = function(data, callback){
  if(callback){
      marmottajax(data)
        .success(function(body) {
            callback(err, body);
        })
        .error(function(err){
            callback(err);
        });
  }
  return new Promise(function(resolve, reject){
      marmottajax(data)
        .success(function(body) {
            resolve(body);
        })
        .error(function(err){
            reject(err);
        });
  });
};


vnjs.getScene = function (scene){
      let { setScene } = this;
emit('preload', {name:'preload',sceneName: scene, msg:'${scene} start loading!'});

const pathToScene = `/game/${config.scenes}/${config.local}/${scene}.json`;


marmottajax({
    url: pathToScene,
    json: true
}).success(function(sceneObject){
    setScene(ctx.scene, sceneObject);
});


};