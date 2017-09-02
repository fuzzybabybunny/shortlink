import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import '/imports/api/links';
import '/imports/api/users';
import '/imports/startup/simple-schema-configuration';

Meteor.startup(() => {
  // code to run on server at startup

});
