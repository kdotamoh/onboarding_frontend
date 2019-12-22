import React from 'react'
import { Router } from '@reach/router'
// import { createGlobalStyle } from 'styled-components'

import PreOnboardingLogin from 'pages/login/PreOnboardingLogin'
import DashboardWelcome from 'pages/dashboard/Welcome'
import Onboarding from 'pages/dashboard/Onboarding'

import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <PreOnboardingLogin path="/" />
        <DashboardWelcome path="/welcome" />
        <Onboarding path="/onboarding" />
      </Router>
    </div>
  )
}

export default App
