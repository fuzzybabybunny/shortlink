import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserHistory } from 'react-history';

import Login from '/imports/ui/Login';
import SignUp from '/imports/ui/SignUp';
import Link from '/imports/ui/Link';
import NotFound from '/imports/ui/NotFound';

const routes = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={ (props) => <Login {...props}/> }/>
			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/link" component={Link}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</BrowserRouter>
);

Meteor.startup( () => {

	ReactDOM.render(routes, document.getElementById('app'));

});