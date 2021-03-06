import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '/imports/api/links';
import { Links } from '/imports/api/links';
import '/imports/startup/simple-schema-configuration';

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use( (req, res, next) => {
  	console.log(req.url);
  	const _id = req.url.slice(1);
  	// console.log('req: ', req.url, req.method, req.headers);
  	const link = Links.findOne({_id});
  	console.log(link);
  	if(link){
	  	res.statusCode = 302;
	  	res.setHeader('Location', link.url);
	  	res.end();
  	} else {
  		next();
  	}
  });

});
