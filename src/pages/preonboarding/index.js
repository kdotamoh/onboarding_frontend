import React, { Component } from 'react'
import { Router } from '@reach/router'
import PreOnboardingLogin from './PreOnboardingLogin'
import Welcome from './Welcome'
import Info from './Info'
import CompanyOverview from './CompanyOverview'
import Compliance from './Compliance'

export default class index extends Component {
  render() {
    return (
      <Router>
        <PreOnboardingLogin path="/" />
        <Welcome path="welcome" />
        <Info path="info" />
        <CompanyOverview path="company-overview" />
        <Compliance path="compliance" />
      </Router>
    )
  }
}
