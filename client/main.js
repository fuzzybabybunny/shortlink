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

const browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
	if(Meteor.user()){
		browserHistory.replace('/links');
	}
};
const onEnterPrivatePage = () => {
	if(!Meteor.user()){
		browserHistory.replace('/');
	}
};

const routes = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" onEnter={onEnterPublicPage} render={ (props) => <Login {...props}/> }/>
			<Route exact path="/signup" onEnter={onEnterPublicPage} component={SignUp}/>
			<Route exact path="/links" onEnter={onEnterPrivatePage} component={Link}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</BrowserRouter>
);

Tracker.autorun( () => {
	const isAuthenticated = !!Meteor.userId();
	const pathName = browserHistory.location.pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
	const isAuthenticatedPage = authenticatedPages.includes(pathName);
	if (isUnauthenticatedPage && isAuthenticated){
		browserHistory.replace('/links');
	} else if (isAuthenticatedPage && !isAuthenticated){
		browserHistory.replace('/');
	}

});

Meteor.startup( () => {

	ReactDOM.render(routes, document.getElementById('app'));

});