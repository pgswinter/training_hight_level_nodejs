import React, {Component} from 'react';
import {connect} from "react-redux"

import {fetchUsers} from "../redux/actions/UsersAction"
import {fetchTweets} from "../redux/actions/TweetAction"
import {fetchPortfolios} from "../redux/actions/PortfoliosAction"
@connect((store)=>{
	return {
		user: store.user.user,
		userFetched: store.user.fetched,
		tweets: store.tweets.tweets,
		portfolios: store.portfolios.portfolios
	};
})

export default class ReduxLayout extends Component{
	componentWillMount(){
		this.props.dispatch(fetchUsers())
		this.props.dispatch(fetchPortfolios())
		this.props.dispatch(fetchTweets())
	}

	fetchTweets(){
		// this.props.dispatch(fetchTweets())
	}

	render(){
		const { user, tweets, portfolios }= this.props;

		// if(!tweets.length){
		// 	return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
		// }
		const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
		const mappedPortfolios = Object.keys(portfolios).map(idPerson =>
					<div key={idPerson}>
						<p>{portfolios[idPerson].name}</p>
						<p>{portfolios[idPerson].career}</p>
					</div>
				)
		return <div>
			<h1>{user.name}</h1>
			<ul>{mappedTweets}</ul>
			<h2>
			</h2>
			<div className="the_portfolios">
				{mappedPortfolios}
			</div>
			
		</div>
	}
};

// class ReduxLayout extends Component{
// 	render(){
// 		console.log(this.props)
// 		return null;
// 	}
// }