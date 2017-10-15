import React from 'react'
import {render} from 'react-dom'
import {Provider} from "react-redux"

import ReduxLayout from './ReduxLayout'
import store from "../redux/store"

const test = document.getElementById('test')

render(
	<Provider store={store}>
		<ReduxLayout />	
	</Provider>
	,test
);
