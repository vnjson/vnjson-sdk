 const
   versiony        = require('versiony');

 versiony
	/*.major()
    .minor()
    .patch()*/                
    .from('version.json')  
    .to()                   
    .to('../package.json')    
    .end()   