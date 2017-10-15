import axios from "axios";

export function fetchPortfolios(){
	return function (dispatch){
		axios.get(`/api/portfolios`)
			.then((response)=>{
				dispatch({type: "FETCH_PORTFOLIOS_FULFILLED",payload: response.data.portfolios})		
			})
			.catch((err)=>{
				dispatch({type: "FETCH_PORTFOLIOS_REJECTED",payload: err})
			})	
	}
}

// export function addPortfolio(id,text){
// 	return{
// 		type: 'ADD_PORTFOLIO',
// 		payload:{
// 			id,
// 			text
// 		}
// 	}
// }

// export function updatePortfolio(id,text){
// 	return{
// 		type: 'UPDATE_PORTFOLIO',
// 		payload:{
// 			id,
// 			text
// 		}
// 	}
// }

// export function deletePortfolio(id,text){
// 	return{
// 		type: 'DELETE_PORTFOLIO',
// 		payload:{
// 			id,
// 			text
// 		}
// 	}
// }