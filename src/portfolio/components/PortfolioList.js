import React from 'react';
import PortfolioPreview from './PortfolioPreview';

const PortfolioList = ({portfolios}) => (
		<div className="PortfolioList">
			{Object.keys(portfolios).map(idPerson =>
				<PortfolioPreview key={idPerson} {...portfolios[idPerson]} />
			)}
		</div>
	)

// const PortfolioList = ({portfolios}) => (
// 		<div className="PortfolioList">
// 			{Object.keys(portfolios).map(idPerson =>
// 				<PortfolioPreview key={idPerson} portfolios={portfolios[idPerson]} />
// 			)}
// 		</div>
// 	)

export default PortfolioList;