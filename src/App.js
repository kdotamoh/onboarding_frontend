import React from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'

import GlobalStyles from './GlobalStyles'

import PreOnboarding from 'pages/preonboarding'
import Onboarding from 'pages/onboarding'
// import NotFound from 'pages/onboarding'

function App() {
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

export default App
