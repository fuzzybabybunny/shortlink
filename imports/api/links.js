import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');
 
if(Meteor.isServer){
  Meteor.publish('links', function(){
  	if(this.userId){
 		 	return Links.find({userId: this.userId});
  	};
  });
};

// if(Meteor.isClient){
// 	console.log("CLIENT");	
//   Meteor.publish('links', () => {
//   	return Links.find();
//   	console.log(this.userId);
//   	if(this.userId){
//  		 	return Links.find({});
//   	};
//   });
// };