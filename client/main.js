import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserHistory } from 'react-history';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from '/imports/ui/Login';
import SignUp from '/imports/ui/SignUp';
import Link from '/imports/ui/Link';
import NotFound from '/imports/ui/NotFound';

const history = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const routes = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={ (props) => <Login {...props}/> }/>
			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/links" component={Link}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</BrowserRouter>
);

Tracker.autorun( () => {
	const isAuthenticated = !!Meteor.userId();
	const pathName = history.location.pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
	const isAuthenticatedPage = authenticatedPages.includes(pathName);
	if (isUnauthenticatedPage && isAuthenticated){
		history.push('/links');
	} else if (isAuthenticatedPage && !isAuthenticated){
		history.push('/');
	}

});

Meteor.startup( () => {

	ReactDOM.render(routes, document.getElementById('app'));

});