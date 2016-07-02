const
  current           = require('../system/current'),
  configApp         = require('./app');

module.exports = {
	buildDir:configApp.projectsDir+"/"+current.project+"/build",
	cache:"./.cache",
	version: "0.12.2",
	appName:current.project,
    appVersion: current.version
}