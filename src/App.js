import React from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'

import PreOnboarding from 'pages/preonboarding'

import GlobalStyles from './GlobalStyles'
import Onboarding from 'pages/onboarding'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>MTN</title>
      </Helmet>
      <GlobalStyles />
      <Router>
        <PreOnboarding path="preonboarding/*" />
        <Onboarding path="onboarding/*" />
      </Router>
    </div>
  )
}

export default App
