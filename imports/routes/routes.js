import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

export const routes = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" onEnter={onEnterPublicPage} render={ (props) => <Login {...props}/> }/>
			<Route exact path="/signup" onEnter={onEnterPublicPage} component={SignUp}/>
			<Route exact path="/links" onEnter={onEnterPrivatePage} component={Link}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</BrowserRouter>
);

export const onAuthChange = (isAuthenticated) => {
	const pathName = browserHistory.location.pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
	const isAuthenticatedPage = authenticatedPages.includes(pathName);
	if (isUnauthenticatedPage && isAuthenticated){
		browserHistory.replace('/links');
	} else if (isAuthenticatedPage && !isAuthenticated){
		browserHistory.replace('/');
	};

};