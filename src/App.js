import React from 'react'
import { Router } from '@reach/router'

import PreOnboarding from 'pages/preonboarding'

import GlobalStyles from './GlobalStyles'
import Onboarding from 'pages/onboarding'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <PreOnboarding path="preonboarding/*" />
        <Onboarding path="onboarding/*" />
      </Router>
    </div>
  )
}

export default App
