// const initialState = {
// 	user:{
// 		id: null,
// 		name: null,
// 		age: null
// 	},
// 	fetching: false,
// 	fetched: false,
// 	error: null
// };

// const reducer = (state=initialState, action)=>{
// 	switch(action.type){
// 		case "FETCH_USERS":{
// 			return {...state, fetching: true}
// 		}
// 		case "FETCH_USERS_REJECTED":{
// 			return {...state, fetching: false, error: action.payload}
// 		}
// 		case "FETCH_USERS_FULFILLED":{
// 			return {
// 				...state,
// 				fetching: false,
// 				fetched: true,
// 				users: action.payload
// 			}
// 		}
// 		case "SET_USER_NAME":{
// 			return{
// 				...state,
// 				user:{...state.user, name: action.payload}
// 			}
// 		}
// 		case "SET_USER_AGE":{
// 			return{
// 				...state,
// 				user:{...state.user, age: action.payload}
// 			}
// 		}
// 	}
// }

// export default reducer

export default function reducer(state={
	user:{
		id: null,
		name: null,
		age: null
	},
	fetching: false,
	fetched: false,
	error: null
}, action){
	switch(action.type){
		case "FETCH_USERS":default:{
			return {...state, fetching: true}
		}
		case "FETCH_USERS_REJECTED":{
			return {...state, fetching: false, error: action.payload}
		}
		case "FETCH_USERS_FULFILLED":{
			return {
				...state,
				fetching: false,
				fetched: true,
				user: action.payload
			}
		}
		case "SET_USER_NAME":{
			return{
				...state,
				user:{...state.user, name: action.payload}
			}
		}
		case "SET_USER_AGE":{
			return{
				...state,
				user:{...state.user, age: action.payload}
			}
		}
	}
}