import React, {Component} from 'react';

// const PortfolioPreview = ({portfolios}) => (
// 		<div className="PortfolioList">
// 			<div className="PortfolioPreview">
// 				<div className="portfolio-name" >
// 					{portfolios.name}
// 				</div>
// 				<div className="portfolio-career">
// 					{portfolios.career}
// 				</div>
// 			</div>
// 		</div>
// 	)

class PortfolioPreview extends Component{
	handleClick = () => {
		this.props.onClick(this.props.id)
	};
	render(){
		return (
			<div className="PortfolioPreview"
				onClick={this.handleClick}
			>
				<div className="portfolio-name" >
					{this.props.name}
				</div>
				<div className="portfolio-career">
					{this.props.career}
				</div>
			</div>
		) 
	}
}

export default PortfolioPreview;