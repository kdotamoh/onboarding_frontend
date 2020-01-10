import React, { Component } from 'react'
import { Router } from '@reach/router'

import CompanyOverview from './CompanyOverview'
import OnboardingLogin from './OnboardingLogin'
import CEOWelcome from './CEOWelcome'
import MissionVision from './MissionVision'
import Organisation from './Organisation'
import EmployeeValue from './EmployeeValue'
import StrategicPillars from './StrategicPillars'
import Tasks from 'components/dashboard/Tasks'
export default class Onboarding extends Component {
  render() {
    return (
      <Router>
        <OnboardingLogin path="/" />
        <CompanyOverview path="/company-overview" />
        <CEOWelcome path="/ceo-welcome" />
        <MissionVision path="/mission-and-vision" />
        <Organisation path="/how-we-are-organised" />
        <EmployeeValue path="/employee-value-proposition" />
        <StrategicPillars path="/strategic-pillars-and-priorities" />
        <Tasks path="/tasks" />
      </Router>
    )
  }
}
