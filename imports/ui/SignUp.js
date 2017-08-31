import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component{

	render(){
		return (
			<div>
				<h1>Signup Comp</h1>
				<Link to="/">Log In</Link>
			</div>
		);
	}

};
