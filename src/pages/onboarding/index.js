import React, { Component } from 'react'
import { Router } from '@reach/router'

import goBack from 'utils/go-back'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import { SideNav, SmallNav } from 'components/navigation'

import OnboardingLink from 'pages/onboarding/OnboardingLink'

import CompanyOverview from './CompanyOverview'
// import OnboardingLogin from './OnboardingLogin'
import CEOWelcome from './CEOWelcome'
import MissionVision from './MissionVision'
import Organisation from './Organisation'
import EmployeeValue from './EmployeeValue'
import StrategicPillars from './StrategicPillars'
import Tasks from 'components/dashboard/Tasks'

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav>
              <OnboardingLink to="/onboarding/company-overview">
                Company Overview
              </OnboardingLink>
              <OnboardingLink to="/onboarding/ceo-welcome">
                CEO Welcome
              </OnboardingLink>
              <OnboardingLink to="/onboarding/mission-and-vision">
                Mission &amp; Vision
              </OnboardingLink>
              <OnboardingLink to="/onboarding/how-we-are-organised">
                How we are organised
              </OnboardingLink>
              <OnboardingLink to="/onboarding/employee-value-proposition">
                Employee Value Proposition
              </OnboardingLink>
              <OnboardingLink to="/onboarding/strategic-pillars-and-priorities">
                Strategic Pillars &amp; Priorities
              </OnboardingLink>
              <OnboardingLink to="/dashboard/tasks">Tasks</OnboardingLink>
            </SideNav>
          </SplitGridLeftColumn>
          <SplitGridRightColumn px="10rem" py="5rem" background={COLORS.WHITE}>
            <u style={{ cursor: 'pointer' }} onClick={() => goBack()}>
              {'< Back'}
            </u>
            <Router>
              <CompanyOverview path="/company-overview" />
              <CEOWelcome path="/ceo-welcome" />
              <MissionVision path="/mission-and-vision" />
              <Organisation path="/how-we-are-organised" />
              <EmployeeValue path="/employee-value-proposition" />
              <StrategicPillars path="/strategic-pillars-and-priorities" />
              <Tasks path="/tasks" />
            </Router>
          </SplitGridRightColumn>
        </SplitGrid>
      </div>

      // <Router>
      //   <OnboardingLogin path="/login" /> // Todo: Handle onboarding login
      // </Router>
    )
  }
}
