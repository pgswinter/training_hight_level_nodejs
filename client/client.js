import React from 'react'
import {render} from 'react-dom'
import App from '../src/portfolio/components/App'

render(
	<App initialData={window.initialData}/>,
	document.getElementById('app')
)
