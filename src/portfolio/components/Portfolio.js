import React, {Component} from 'react';

class Portfolio extends Component{
	render(){
		return(
			<div className="portfolio">
				<div className="portfolio-name">
					{this.props.name}
				</div>
				<div className="portfolio-career">
					{this.props.career}
				</div>
				<div className="portfolio-description">
					{this.props.description}
				</div>
				<div className="portfolio-national">
					{this.props.national}
				</div>
				<div className="portfolio-address">
					{this.props.address}
				</div>
				<div className="portfolio-phone">
					{this.props.phone}
				</div>
				<div className="portfolio-mail">
					{this.props.mail}
				</div>
				<div className="link" 
					onClick={this.props.portfolioListClick}>
					Back to Home Page
				</div>
			</div>
		)
	}
}

export default Portfolio;