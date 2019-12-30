import React from 'react'
import { Router, navigate } from '@reach/router'

import PreOnboarding from 'pages/preonboarding'

import GlobalStyles from './GlobalStyles'
import Onboarding from 'pages/onboarding'

function App() {
  // This is tempporary
  React.useEffect(() => {
    navigate('/preonboarding')
  }, [])
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
