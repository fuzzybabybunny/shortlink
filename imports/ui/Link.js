import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '/imports/api/links';
import LinksList from '/imports/ui/LinksList';

export default class Link extends React.Component{

	onLogout(){
		Accounts.logout();
		this.props.history.push('/');
	}

	onSubmit(e){
		e.preventDefault();
		const url = e.target.URL.value.trim();
		if(url){
			Links.insert({url, userId: Meteor.userId() });
			e.target.URL.value = '';
		}
	}

	render(){
		return (
			<div>
				<p>Link Comp here</p>
				<button onClick={this.onLogout.bind(this)} >Log Out</button>
				<LinksList/>
				<p>Add Link</p>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" name="URL" placeholder="URL"/>
					<button>Add Link</button>
				</form>
			</div>
		);
	}

};
