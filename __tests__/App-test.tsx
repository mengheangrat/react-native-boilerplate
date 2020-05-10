/**
 * @format
 */

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import 'react-native'
import React from 'react'
import App from '../App/App'

it('renders correctly', () => {
  renderer.create(<App />)
})
