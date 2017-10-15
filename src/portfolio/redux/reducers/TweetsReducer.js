// const initialState = {
// 	tweets: [],
// 	fetching: false,
// 	fetched: false,
// 	error: null
// };

// const reducer = (state=initialState, action)=>{
// 	switch(action.type){
// 		case "FETCH_TWEETS":{
// 			return {...state, fetching: true}
// 		}
// 		case "FETCH_TWEETS_REJECTED":{
// 			return {...state, fetching: false, error: action.payload}	
// 		}
// 		case "FETCH_TWEETS_FULFILLED":{
// 			return {
// 				...state,
// 				fetching: false,
// 				fetched: true,
// 				TWEETS: action.payload
// 			}
// 		}
// 		case "ADD_TWEET":{
// 			return{
// 				...state,
// 				tweets:[...state.tweets, action.payload]
// 			}
// 		}
// 		case "UPDATE_TWEET":{
// 			const {id, text} = action.payload
// 			const newTweets = [...state.tweets]
// 			const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
// 			newTweets[tweetToUpdate] = action.payload
// 			return {
// 				...state,
// 				tweets: newTweets
// 			}
// 		}
// 		case "DELETE_TWEET":{
// 			return {
// 				...state,
// 				tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
// 			}
// 		}
// 	}
// }

// export default reducer

export default function reducer(state={
		tweets: [],
		fetching: false,
		fetched: false,
		error: null
	}, action){
		switch(action.type){
			case "FETCH_TWEETS":default:{
				return {...state, fetching: true}
			}
			case "FETCH_TWEETS_REJECTED":{
				return {...state, fetching: false, error: action.payload}	
			}
			case "FETCH_TWEETS_FULFILLED":{
				return {
					...state,
					fetching: false,
					fetched: true,
					tweets: action.payload
				}
			}
			case "ADD_TWEET":{
				return{
					...state,
					tweets:[...state.tweets, action.payload]
				}
			}
			case "UPDATE_TWEET":{
				const {id, text} = action.payload
				const newTweets = [...state.tweets]
				const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
				newTweets[tweetToUpdate] = action.payload
				return {
					...state,
					tweets: newTweets
				}
			}
			case "DELETE_TWEET":{
				return {
					...state,
					tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
				}
			}
	}
}