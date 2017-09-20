import React, {Component} from 'react';

class Portfolio extends Component{
	render(){
		return(
			<div className="portfolio">
				{this.props.name}
			</div>
		)
	}
}

export default Portfolio;