const
  current                = require('./current'),
  package                = require('../package');

module.exports = {
	currentProjectName: current.project,
	location:'http://localhost:9090',
	winTitle:`${package.name}@${package.version}`
}