export default function reducer(state={
		portfolios: {},
		fetching: false,
		fetched: false,
		error: null
	}, action){
		switch(action.type){
			case "FETCH_PORTFOLIOS":default:{
				return {...state, fetching: true}
			}
			case "FETCH_PORTFOLIOS_REJECTED":{
				return {...state, fetching: false, error: action.payload}	
			}
			case "FETCH_PORTFOLIOS_FULFILLED":{
				return {
					...state,
					fetching: false,
					fetched: true,
					portfolios: action.payload
				}
			}
			// case "ADD_PORTFOLIO":{
			// 	return{
			// 		...state,
			// 		portfolios:[...state.portfolios, action.payload]
			// 	}
			// }
			// case "UPDATE_PORTFOLIO":{
			// 	const {id, text} = action.payload
			// 	const newPortfolios = [...state.portfolios]
			// 	const portfoliosToUpdate = newPortfolios.findIndex(portfolio => portfolio.id === id)
			// 	newPortfolios[portfoliosToUpdate] = action.payload
			// 	return {
			// 		...state,
			// 		portfolios: newPortfolios
			// 	}
			// }
			// case "DELETE_PORTFOLIO":{
			// 	return {
			// 		...state,
			// 		portfolios: state.portfolios.filter(portfolio => portfolio.id !== action.payload)
			// 	}
			// }
	}
}