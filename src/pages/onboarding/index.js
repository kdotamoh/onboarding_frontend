import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, navigate } from '@reach/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import goBack from 'utils/go-back'
import Scrolltop from 'utils/scrolltop'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import { SideNav, SmallNav } from 'components/navigation'

import ControlledLink from './ControlledLink'

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

import Events from './dashboard/Events'
import UserTasks from './dashboard/Tasks'
import UserProfile from './dashboard/UserProfile'
import Home from './dashboard/Home'
import End from './dashboard/End'

import NotFound from 'pages/NotFound'

export const Wrapper = styled.div`
  ${space}

  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
`

// eslint-disable-next-line
const FunctionalGroups = ({ children }) => {
  return (
    <div>
      <SmallNav />
      <SplitGrid leftWidth={20} rightWidth={80}>
        <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
          <Wrapper pt="5rem">
            <p
              css={`
                padding-left: 1.2rem;
              `}
            >
              Functional Groups
            </p>
            <SideNav>
              <ControlledLink to="/onboarding/functional-groups/overview">
                Overview
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/finance-service">
                Finance &amp; Service
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/employee-industrial">
                Employee &amp; Industrial
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/learning-development">
                Learning &amp; Development
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/hr-service">
                HR Services
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/marketing">
                Marketing
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/sales">
                Sales
              </ControlledLink>
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
            <p
              css={`
                padding-left: 1.2rem;
              `}
            >
              About MTN
            </p>
            <SideNav>
              <ControlledLink to="/onboarding/about-mtn/company-overview">
                Company Overview
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/ceo-welcome">
                CEO Welcome
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/mission-and-vision">
                Mission &amp; Vision
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/how-we-are-organised">
                How we are organised
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/employee-value-proposition">
                Employee Value Proposition
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/strategic-pillars-and-priorities">
                Strategic Pillars &amp; Priorities
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/tasks">
                Tasks
              </ControlledLink>
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

class Onboarding extends Component {
  render() {
    return (
      <>
        {this.props.token ? (
          <>
            <Router>
              <Scrolltop path="/">
                <OnboardingLogin path="/" />
                <Events path="/events" />
                <UserTasks path="/user-tasks" />
                <Home path="/home" />
                <UserProfile path="/user-profile" />
                <End path="/end" />
              </Scrolltop>
            </Router>
            <Router>
              <Scrolltop path="/">
                <FunctionalGroups path="functional-groups">
                  <Overview path="/overview" />
                  <FinanceAndService path="/finance-service" />
                  <EmployeeIndustrial path="/employee-industrial" />
                  <LearningDevelopment path="/learning-development" />
                  <HRServices path="/hr-service" />
                  <Marketing path="/marketing" />
                  <Sales path="/sales" />
                </FunctionalGroups>
              </Scrolltop>
            </Router>
            <Router>
              <Scrolltop path="/">
                <AboutMTN path="about-mtn">
                  <CompanyOverview path="/company-overview" />
                  <CEOWelcome path="/ceo-welcome" />
                  <MissionVision path="/mission-and-vision" />
                  <Organisation path="/how-we-are-organised" />
                  <EmployeeValue path="/employee-value-proposition" />
                  <StrategicPillars path="/strategic-pillars-and-priorities" />
                  <Tasks path="/tasks" />
                  <NotFound default />
                </AboutMTN>
              </Scrolltop>
            </Router>
          </>
        ) : (
          <Router>
            <OnboardingLogin path="/*" />
          </Router>
        )}
      </>
    )
  }
}
Onboarding.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
}))(Onboarding)
