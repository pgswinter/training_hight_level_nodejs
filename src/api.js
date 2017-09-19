import axios from 'axios';

export const fetchPortfolio = idPerson => {
	return axios.get(`/api/portfolios/${idPerson}`)
				.then(resp => resp.data);
}

export const fetchPortfolioList = () => {
	return axios.get(`/api/portfolios`)
				.then(resp => resp.data.portfolios);
}

export const fetchSkills = idSkills => {
	return axios.get(`/api/skills/${idSkills.join(',')}`)
				.then(resp => resp.data.skills);
}