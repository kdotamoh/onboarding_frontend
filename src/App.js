import React from 'react'
import { Router } from '@reach/router'

import PreOnboarding from 'pages/preonboarding'

import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <PreOnboarding path="preonboarding/*" />
      </Router>
    </div>
  )
}

export default App
