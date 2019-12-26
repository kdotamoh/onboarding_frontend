import React, { Component } from 'react'
import { Router } from '@reach/router'
import PreOnboardingLogin from './PreOnboardingLogin'
import Welcome from './Welcome'
import Info from './Info'
import CompanyOverview from './CompanyOverview'

export default class index extends Component {
  render() {
    return (
      <Router>
        <PreOnboardingLogin path="/" />
        <Welcome path="welcome" />
        <Info path="info" />
        <CompanyOverview path="company-overview" />
      </Router>
    )
  }
}
