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
		Accounts.createUser({
			email: e.target.email.value.trim(),
			password: e.target.password.value.trim()
		}, (err) => {
			console.log('Signup Callback ', err);
		})
		// this.setState({
		// 	error: "sdfsdf"
		// });
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
