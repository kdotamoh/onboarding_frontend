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

import CompanyOverview from './about-mtn/CompanyOverview'
// import OnboardingLogin from './OnboardingLogin'
import CEOWelcome from './about-mtn/CEOWelcome'
import MissionVision from './about-mtn/MissionVision'
import Organisation from './about-mtn/Organisation'
import EmployeeValue from './about-mtn/EmployeeValue'
import StrategicPillars from './about-mtn/StrategicPillars'
import Tasks from './about-mtn/Tasks'
import OnboardingLogin from 'pages/onboarding/OnboardingLogin'
import EmployeeIndustrial from './functional-groups/EmployeeIndustrial'
import FinanceAndService from './functional-groups/FinanceAndService'
import LearningDevelopment from './functional-groups/LearningDevelopment'
import Marketing from './functional-groups/Marketing'
import Overview from './functional-groups/Overview'
import Sales from './functional-groups/Sales'
import HRServices from './functional-groups/HRServices'

// eslint-disable-next-line
const FunctionalGroups = ({ children }) => {
  return <div>{children}</div>
}

// eslint-disable-next-line
const AboutMTN = ({ children }) => {
  // eslint-disable-line
  return <div>{children}</div>
}

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <Router>
          <OnboardingLogin path="/" />
        </Router>
        <SmallNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav>
              <OnboardingLink to="/onboarding/about-mtn/company-overview">
                Company Overview
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/ceo-welcome">
                CEO Welcome
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/mission-and-vision">
                Mission &amp; Vision
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/how-we-are-organised">
                How we are organised
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/employee-value-proposition">
                Employee Value Proposition
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/strategic-pillars-and-priorities">
                Strategic Pillars &amp; Priorities
              </OnboardingLink>
              <OnboardingLink to="/onboarding/about-mtn/tasks">
                Tasks
              </OnboardingLink>
            </SideNav>
          </SplitGridLeftColumn>
          <SplitGridRightColumn px="10rem" py="5rem" background={COLORS.WHITE}>
            <u style={{ cursor: 'pointer' }} onClick={() => goBack()}>
              {'< Back'}
            </u>
            <div
              css={`
                width: 600px;
              `}
            >
              <Router>
                <FunctionalGroups path="functional-groups">
                  {/* <FunctionalOverview path="/overview" /> */}
                  <EmployeeIndustrial path="/employee-industrial" />
                  <FinanceAndService path="/finance-services" />
                  <HRServices path="/hr-service" />
                  <LearningDevelopment path="/learning-development" />
                  <Marketing path="/marketing" />
                  <Overview path="/overview" />
                  <Sales path="/sales" />
                </FunctionalGroups>

                <AboutMTN path="about-mtn">
                  <CompanyOverview path="/company-overview" />
                  <CEOWelcome path="/ceo-welcome" />
                  <MissionVision path="/mission-and-vision" />
                  <Organisation path="/how-we-are-organised" />
                  <EmployeeValue path="/employee-value-proposition" />
                  <StrategicPillars path="/strategic-pillars-and-priorities" />
                  <Tasks path="/tasks" />
                </AboutMTN>
              </Router>
            </div>
          </SplitGridRightColumn>
        </SplitGrid>
      </div>

      // <Router>
      //   <OnboardingLogin path="/login" /> // Todo: Handle onboarding login
      // </Router>
    )
  }
}
