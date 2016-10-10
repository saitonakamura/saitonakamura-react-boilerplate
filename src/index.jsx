import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()
const rootElement = document.getElementById('root')

render(
  <Root store={store} />,
  rootElement
)

if (module.hot) {
  module.got.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default // eslint-disable-line global-require
    render(
      <NextRoot store={store} />,
      rootElement
    )
  })
}
