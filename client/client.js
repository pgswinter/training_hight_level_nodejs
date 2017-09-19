import React from 'react'
import {render} from 'react-dom'
import App from '../src/portfolio/components/App'

render(
	<App initialPorfolios={window.initialData.portfolios}/>,
	document.getElementById('app')
)
