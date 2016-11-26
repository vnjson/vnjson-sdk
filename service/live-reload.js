const
  fs                           = require('fs-extra'),
  {projectsDir}                = require('../config/sdk');


const currentProjectName = 'kserxis1';

function start(webview){
fs.watch(projectsDir+"/"+currentProjectName+"/source", (eventType, filename) =>{
			webview.reload();
			console.log(eventType +": "+filename);
});


};

module.exports = {
	start
}
