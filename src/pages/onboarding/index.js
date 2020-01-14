import React, { Component } from 'react'
import { Router, navigate } from '@reach/router'
import styled from 'styled-components'
import { space } from 'styled-system'

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

export const Wrapper = styled.div`
  ${space}

  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
  /* transform: translateY(10rem); */
`

// eslint-disable-next-line
const FunctionalGroups = ({ children }) => {
  return (
    <div>
      <SmallNav />
      <SplitGrid leftWidth={20} rightWidth={80}>
        <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
          <Wrapper pt="5rem">
            <p>Functional Groups</p>
            <SideNav>
              <OnboardingLink to="/onboarding/functional-groups/overview">
                Overview
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/finance-service">
                Finance &amp; Service
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/employee-industrial">
                Employee &amp; Industrial
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/learning-development">
                Learning &amp; Development
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/hr-service">
                HR Services
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/marketing">
                Marketing
              </OnboardingLink>
              <OnboardingLink to="/onboarding/functional-groups/sales">
                Sales
              </OnboardingLink>
            </SideNav>
          </Wrapper>
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
            {children}
          </div>
        </SplitGridRightColumn>
      </SplitGrid>
    </div>
  )
}

// eslint-disable-next-line
const AboutMTN = ({ children }) => {
  return (
    <div>
      <SmallNav />
      <SplitGrid leftWidth={20} rightWidth={80}>
        <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
          <Wrapper pt="5rem">
            <p>About MTN</p>
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
            <p
              css={`
                padding-top: 2rem;
                cursor: pointer;
              `}
              onClick={() => navigate('/onboarding/functional-groups/overview')}
            >
              Functional Groups
            </p>
          </Wrapper>
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
            {children}
          </div>
        </SplitGridRightColumn>
      </SplitGrid>
    </div>
  )
}

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <Router>
          <OnboardingLogin path="/" />
        </Router>
        <Router>
          <FunctionalGroups path="functional-groups">
            <Overview path="/overview" />
            <FinanceAndService path="/finance-service" />
            <EmployeeIndustrial path="/employee-industrial" />
            <LearningDevelopment path="/learning-development" />
            <HRServices path="/hr-service" />
            <Marketing path="/marketing" />
            <Sales path="/sales" />
          </FunctionalGroups>
        </Router>
        <Router>
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
    )
  }
}
