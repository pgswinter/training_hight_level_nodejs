import {combineReducers} from "redux"

import tweets from "./TweetsReducer"
import user from "./UsersReducer"
import portfolios from "./PortfoliosReducer"


// const allReducers = combineReducers({
//     tweets: tweets,
//     user: user
// });

export default combineReducers({
    tweets,
    user,
    portfolios,
})