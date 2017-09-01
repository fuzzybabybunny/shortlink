// import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignUp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e){
		e.preventDefault();
		let email = e.target.email.value.trim();
		let password = e.target.password.value.trim();

		if(password.length < 6){
			return this.setState({error: 'Password must be more than 6 characters long.'});
		}
		
		Accounts.createUser({ email, password }, (err) => {
			err ? this.setState({error: err.reason}) : this.setState({error: ''});
		});

	}

	render(){
		return (
			<div>
				<h1>Signup Comp</h1>

				{this.state.error ? <p>{this.state.error}</p> : undefined }

				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="email" name="email" placeholder="Email"/>
					<input type="password" name="password" placeholder="Password"/>
					<button>Create Account</button>
				</form>

				<Link to="/">Log In</Link>
			</div>
		);
	}

};
