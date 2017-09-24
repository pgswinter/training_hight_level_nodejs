import React, {Component} from 'react';
import PortfolioList from './PortfolioList';
import Portfolio from './Portfolio';
import * as api from '../../../client/api'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

const onPopState = handler => {
	window.onpopstate = handler;
}

class App extends Component{
	constructor(props, context){
		super(props, context)
		this.state = this.props.initialData;
	};

	componentDidMount(){
		onPopState((event)=>{
			this.setState({
				currentIdPerson: (event.state || {}).currentIdPerson
			});
		})
	}

	componentWillUnmount(){
		onPopState(null);
	}

	fetchPortfolio = (idPerson) => {
		pushState(
			{currentIdPerson: idPerson},
			`/portfolio/${idPerson}`
		);
		// **** fetch Data from api
		api.fetchPortfolio(idPerson).then(portfolio => {
			this.setState({
				currentIdPerson: portfolio.id,
				portfolios:{
					...this.state.portfolios,
					[portfolio.id]: portfolio
				}
			});
		});
		// **** end fetch Data from api
	};

	fetchPortfolioList = (idPerson) => {
		pushState(
			{currentIdPerson: null},
			`/`
		);
		// **** fetch Data from api
		api.fetchPortfolioList().then(portfolios => {
			this.setState({
				currentIdPerson: null,
				portfolios
			});
		});
		// **** end fetch Data from api
	};

	// fetchSkills = (idSkills) => {
	// 	api.fetchSkills(idSkills).then(skills => {
	// 		this.setState({
	// 			skills
	// 		})
	// 	})
	// }

	currentPortfolio(){
		return this.state.portfolios[this.state.currentIdPerson];
	}

	currentContent(){
		if(this.state.currentIdPerson){
			return <Portfolio 
					portfolioListClick={this.fetchPortfolioList}
					{...this.currentPortfolio()} />
		}
		return <PortfolioList 
					onPortfolioClick={this.fetchPortfolio}
					portfolios={this.state.portfolios}/>
	}

	render(){
		return(
			<div className="App">
				{this.currentContent()}
			</div>
		)
	}

	// render(){
	// 	return(
	// 		<div className="App">
	// 			{Object.keys(this.state.portfolios).map(idPerson =>
	// 				<div key={idPerson}>
	// 					<p>{this.state.portfolios[idPerson].name}</p>
	// 					<p>{this.state.portfolios[idPerson].career}</p>
	// 				</div>
	// 			)}
	// 		</div>
	// 	)
	// }
}

export default App;