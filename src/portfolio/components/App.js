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
		
	}

	componentWillUnmount(){
		
	}

	fetchPerson = (idPerson) => {
		pushState(
			{currentIdPerson: idPerson},
			`/portfolios/${idPerson}`
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
			return <Portfolio {...this.currentPortfolio()} />
		}
		return <PortfolioList portfolios={this.state.portfolios}/>
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