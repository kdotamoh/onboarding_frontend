import React from 'react'
import { Router } from '@reach/router'

import PreOnboardingLogin from 'pages/login/PreOnboardingLogin'
import DashboardWelcome from 'pages/dashboard/Welcome'

function App() {
    return (
        <div className="App">
            <Router>
                <PreOnboardingLogin path="/" />
                <DashboardWelcome path="/welcome" />
            </Router>
        </div>
    )
}

export default App
