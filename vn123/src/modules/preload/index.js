vnjs.preload = function(_arr){
  var arr = [];
  if(_arr){
      arr = _arr;
  }else{
      arr = this.game.scenes[this.ctx.scene].assets.images;
  }


var images = [];
function preloadImages(arr) {
    for (var i = 0; i < arr.length; i++) {
        images[i] = new Image();
        images[i].src = `/game/assets/${arr[i]}`;
        console.log("loaded: "+arr[i]);
    }
};
preloadImages(arr);
this.emit('preloadImages', {});
};