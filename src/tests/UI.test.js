// @flow
/* eslint-env browser, mocha */
import React from 'react'
import ReactDOM from 'react-dom'

import UI from '../UI.js'

describe('UI', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<UI />, div)
	})

})
