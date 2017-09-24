// fetch data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/portfolio/components/App'

import config from './config'
import axios from 'axios'


// **** Server side routing for a contest
const getApiUrl = idPerson => {
	if(idPerson){
		return `${config.serverUrl}/api/portfolios/${idPerson}`;
	}
	return `${config.serverUrl}/api/portfolios`;
}

const getInitialData = (idPerson, apiData) => {
	if(idPerson){
		return {
			currentIdPerson: apiData.id,
			portfolios:{
				[apiData.id]: apiData
			}
		}
	}
	return {
		portfolios: apiData.portfolios
	}
}

const serverRender = (idPerson) =>
	axios.get(getApiUrl(idPerson))
		.then(resp => {
			// **** after refactor
			const initialData = getInitialData(idPerson, resp.data);
			return{
				initialMarkup: ReactDOMServer.renderToString(
					<App initialData={initialData}/>
				),
				initialData
			};
			// **** after refactor
		});
// **** Server side routing for a contest
export default serverRender;