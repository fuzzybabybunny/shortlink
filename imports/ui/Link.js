import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class Link extends React.Component{

	onLogout(){
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<p>Link Comp here</p>
				<button onClick={this.onLogout.bind(this)}>Log Out</button>
			</div>
		);
	}

};
