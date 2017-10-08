import React, {Component} from 'react';

class Portfolio extends Component{
	componentDidMount(){
		this.props.fetchSkills(this.props.idSkill)
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addSkill(this.refs.newSkillInput.value, this.props._id)
		this.refs.newSkillInput.value = '';
	}
	render(){
		return(
			<div className="portfolio">
				<div className="menu-left">

				</div>
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
				<h2>Skills of Portfolio</h2>
				<div className="skills">
					<ul className="item">
						{
							this.props.idSkill.map(idSkill => 
								<li key={idSkill}>
									{this.props.lookupSkill(idSkill).skill}
								</li>
							)
						}
					</ul>
					<h3>Add new skill</h3>
					<div className="add-new-skill">
						<form onSubmit={this.handleSubmit}>
							<input type="text" ref="newSkillInput"/>
							<input type="submit"/>
						</form>
					</div>
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