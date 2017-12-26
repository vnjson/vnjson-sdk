vnjs.on('alias', function(data){
  /*
  let { character, reply, key } = data;
  let nameBox = document.getElementById('name_box');
  let textBox = document.getElementById('text_box');
  nameBox.innerHTML = character.name;
  nameBox.style.color = character.color;
  textBox.innerHTML = reply;*/
  console.log('aliase')
});
/*
 let {ctx, game, catalog, parse } = this;
    let screen = document.getElementById(game.init.screen);


      var speed = 0;
  var i = 0;

  
if(speed != 0){

textBox.innerHTML = "";

  function print(){
   /* screen.removeEventListener('mousedown',function(){
        parse(ctx, catalog);
    },false);
    textBox.innerHTML += reply[i];
    
    i++
  
    if(i>reply.length-1){
      clearInterval(intId);
      /*   screen.addEventListener('mousedown', function(){
        parse(ctx, catalog);
    }); 
    }

  }
  var intId = setInterval(print, speed);
  */
//}
//else {
   
//} 

vnjs.on('start-game', function(){
/*
document
  .querySelector("#dialog_box")
  .addEventListener('mousedown', this.next);
/*
let {ctx, game, catalog, parse } = this;
let dialogBox = document.querySelector('#dialog_box');
  
    let screen = document.querySelector(game.init.screen);
     parse(ctx, catalog);   
    dialogBox.addEventListener('mousedown', function(){
        parse(ctx, catalog);
    });*/
/*var fps = 15;
function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw,screen);
        // Drawing code goes here
    }, 1000 / fps);
};
draw();
console.log('fps: '+fps);*/
});
vnjs.on('jump', function (pathname){
let { getScene, ctx, game, next } = this;

 /*
  * Если есть слэш в пути прыжка
  * то это сцена, значит надо подружать
  * ресурсы и т.д.
  */
let isScene = /\/\w+/gi.test(pathname);//util.is('scene')

if(isScene){

  const pathArr = pathname.split('/');
  ctx.num = 0;
  ctx.scene = pathArr[0];
  ctx.label  = pathArr[1];
 
  getScene(ctx.scene);


}
  /*
   * Если слэша нет, то это значит лабел.
   * поэтому не надо делать лишних телодвижений
   * а просто выполнить уже загруженный массив
   */
else{
 
   ctx.num = 0;
   ctx.label = pathname;
   ctx.arr = game.scenes[ctx.scene].labels[ctx.label];
   next();
};



});
/*vnjs.on('screen', function(screenName){
  document
    .getElementById(screenName)
    .style('display': "block")

})
*/
vnjs.on('main-menu', function(e){
  console.log('main-menu');
})
 /* let { getScreen, emit, parse } = this;
/*getScreen('main-menu.html', function(html){
    document.getElementById('scene').innerHTML = html;
    /*
     * Здесь срабатывает autorun
     */
/*
    emit('autorun', {name: 'autorun'});
    /*
     * Слушаем пункты меню.
     *//*
document
  .querySelector("#start-game")
  .addEventListener('mousedown', function(){
      parse({
            "screen": "start-game"
          });
           /*
            * Во время первого запуска нужно
            * запустить точку входа.
            * Здесь это и присходит. Ставлю обработчик
            * события (jump) и передаю контекст
            */
            //emit.call(vnjs, 'start-game');
            //emit.call(vnjs, 'jump', config.entry);
     // });
      /*
        startGame.addEventListener('mouseove', function(){
            howler.play();
        })
      */
   /* 
document
  .querySelector("#about")
  .addEventListener('mousedown', function(){
          parse({
            "screen": "about"
          });
      });
document
  .querySelector("#memory-card")
  .addEventListener('mousedown', function(){
          parse({
            "screen": "memory-card"
          });
      });


document
  .querySelector("#settings")
  .addEventListener('mousedown', function(){
          parse({
            "screen": "settings"
          });
      });

//}); //getScreen
}); //vnjs.on('main-menu')

vnjs.on('about', function(){
    this.parse({'scene':"about"});
});

vnjs.on('memory-card', function(){
    this.parse({"scene":"memory-card"});
});

vnjs.on('settings', function(){
    this.parse({"scene":"settings"});
});

vnjs.on('start-game', function(){
  let { emit, config, next } = this;
  emit.call(this, 'jump', config.entry);
  vnjs.on('loaded', next);
});
/**
 * userscript
 */
/*  vnjs.on('game-over', function(){
    this.parse({"scene": "gameover"});
  })

/** ########
 Механизм screen

в vnjson-cli&&sdk в плагинах все лежит в папке плагина

+ plugin
  - index.js
  - main-menu.html
  - main-menu.css  
/////

А когда происходит трансляция в конечный вид новеллы
то все уже лежит по папкам
 +screens/
  - main-menu
 +styles
  - bundle.css
 +plugins
  - bundle.js  

*/



vnjs.on(function(){
  let { ctx, ev } = this;
  function save(data){
    localforage.setItem(data.title, data, (err)=>{
      if(err){
        console.log(err);
      }
      console.log('Игра сохранена');
       ev.emit('save');

    });
  };

  function load(key){
    localforage.getItem(key).then((data)=>{
        console.log(key+": has been loaded!");
        ev.emit('load');
    }).catch(function (err) {
          console.error(err);
    });
  };

let saveBtn = document.querySelector('#save-btn');
let loadBtn = document.querySelector('#load-btn');

saveBtn.addEventListener('mousedown', function(e){
  e.preventDefault();
  save({
    scene: ctx.scene,
    label: ctx.label,
    num: ctx.num,
    title: "vnjson-demo-game"
  });
});

loadBtn.addEventListener('mousedown', function(e){
  e.preventDefault();
  load("vnjson-demo-game");
});

});



vnjs.on('screen', function(e){
 console.log('screen - вызывается для того что бы display:block' ) 
  //let { emit, option} = this;
  /**

  {about:{scene: 'background' }}
  vnjs.on('about')
  */
/*  get(e+".html", function(html){
    document.querySelector(config.screen).innerHTML = html;
    emit(e);
  });*/
  /*let html = document.getElementById("main-menu").innerHTML;
  console.log(html)
 /* document.querySelector(config.screen).innerHTML = html;
  render(config.screen, {});
  emit(e);*/
});


vnjs.on('settings', function(){
   this.parse({'screen': "settings", "scene":"background"})
});
vnjs.on('start-game', function(){

document
  .querySelector("#dialog_box")
  .addEventListener('mousedown', this.next);
/*
let {ctx, game, catalog, parse } = this;
let dialogBox = document.querySelector('#dialog_box');
  
    let screen = document.querySelector(game.init.screen);
     parse(ctx, catalog);   
    dialogBox.addEventListener('mousedown', function(){
        parse(ctx, catalog);
    });*/
/*var fps = 15;
function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw,screen);
        // Drawing code goes here
    }, 1000 / fps);
};
draw();
console.log('fps: '+fps);*/
});
//# sourceMappingURL=plugins.js.map
