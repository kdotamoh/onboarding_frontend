import React from 'react'
import { connect } from 'react-redux'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'

import GlobalStyles from './GlobalStyles'

import PreOnboarding from 'pages/preonboarding'
import Onboarding from 'pages/onboarding'
// import NotFound from 'pages/onboarding'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>MTN</title>
        </Helmet>
        <GlobalStyles />
        <Router>
          <Onboarding path="onboarding/*" />
          <PreOnboarding path="preonboarding/*" />
          {/* <NotFound default /> */}
        </Router>
      </div>
    )
  }
}

export default connect(state => ({
  token: state.token
}))(App)
