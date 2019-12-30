import React, { Component } from 'react'
import { Router } from '@reach/router'

import Scrolltop from 'utils/scrolltop'
import PreOnboardingLogin from './PreOnboardingLogin'
import Welcome from './Welcome'
import Info from './Info'
import CompanyOverview from './CompanyOverview'
import Compliance from './Compliance'
import CodeEthics from './CodeEthics'
import ConditionsService from './ConditionsService'
import Introduction from './Introduction'
import FirstDays from './FirstDays'
import End from './End'

export default class PreOnboarding extends Component {
  render() {
    return (
      <Router>
        <Scrolltop path="/">
          <PreOnboardingLogin path="/" />
          <Welcome path="welcome" />
          <Info path="info" />
          <CompanyOverview path="company-overview" />
          <Compliance path="compliance" />
          <CodeEthics path="code-of-ethics" />
          <ConditionsService path="conditions-of-service" />
          <Introduction path="introduce-yourself" />
          <FirstDays path="your-first-three-days" />
          <End path="end" />
        </Scrolltop>
      </Router>
    )
  }
}
