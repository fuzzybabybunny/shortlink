import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Login extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e){
		e.preventDefault();
		Meteor.loginWithPassword(
			e.target.email.value.trim(), 
			e.target.password.value.trim()
		, (err) => {
			err ? this.setState({error: err.reason}) : undefined;
		})
		// this.setState({
		// 	error: "sdfsdf"
		// });
	}

	render(){
		return (
			<div>
				<h1>Log In Comp</h1>

				{this.state.error ? <p>{this.state.error}</p> : undefined }

				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="email" name="email" placeholder="Email"/>
					<input type="password" name="password" placeholder="Password"/>
					<button>Log In</button>
				</form>
				<Link to="/signup">Don't Have an Account?</Link>
			</div>
		);
	}

};
