import React from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'

import GlobalStyles from './GlobalStyles'

import PreOnboarding from 'pages/preonboarding'
import Onboarding from 'pages/onboarding'
import Dashboard from 'components/dashboard'

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
        <Dashboard path="dashboard/*" />
      </Router>
    </div>
  )
}

export default App
