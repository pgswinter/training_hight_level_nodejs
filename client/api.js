import axios from 'axios';

export const fetchPortfolio = idPerson => {
	return axios.get(`/api/portfolios/${idPerson}`)
				.then(resp => resp.data);
}