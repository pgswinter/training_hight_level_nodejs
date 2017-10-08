import {applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = {menus: []}){
	return finalCreateStore(reducer, initialState)
}