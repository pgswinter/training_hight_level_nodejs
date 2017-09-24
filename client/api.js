import axios from 'axios';

export const fetchPortfolioList = () => {
	return axios.get(`/api/portfolios`)
				.then(resp => resp.data.portfolios);
}

export const fetchPortfolio = idPerson => {
	return axios.get(`/api/portfolios/${idPerson}`)
				.then(resp => resp.data);
}