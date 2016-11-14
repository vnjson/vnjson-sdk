const
  express                           = require('express'),
  fs                                = require('fs-extra'),
  {currentProjectDir}               = require('../data/path'),
  conf                              = require('../config/sdk');



function start(callback){
	let app = express();
	let index = fs.readFileSync(`${currentProjectDir}index.html`);
	app.use('/', express.static(currentProjectDir));
	app.get("/", function(req, res){
		res.send(index);
	});
	app.listen(conf.port, callback());
};
	


module.exports = {
	start,
};