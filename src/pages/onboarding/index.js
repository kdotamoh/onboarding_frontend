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
import CEOWelcome from './about-mtn/CEOWelcome'
import MissionVision from './about-mtn/MissionVision'
import Organisation from './about-mtn/Organisation'
import EmployeeValue from './about-mtn/EmployeeValue'
import StrategicPillars from './about-mtn/StrategicPillars'
import Tasks from './about-mtn/Tasks'
import OnboardingLogin from 'pages/onboarding/OnboardingLogin'
// import EmployeeIndustrial from './functional-groups/EmployeeIndustrial'
import FinanceAndService from './functional-groups/FinanceAndService'
// import LearningDevelopment from './functional-groups/LearningDevelopment'
import Marketing from './functional-groups/Marketing'
import Overview from './functional-groups/Overview'
import Sales from './functional-groups/Sales'
import HRServices from './functional-groups/HRServices'
import CapitalProjects from './functional-groups/CapitalProjects'
import CorporateServices from './functional-groups/CorporateServices'
import CustomerRelations from './functional-groups/CustomerRelations'
import EnterpriseBusiness from './functional-groups/EnterpriseBusiness'
import IAForensics from './functional-groups/IAForensics'
import MobileFinancial from './functional-groups/MobileFinancial'
import Network from './functional-groups/Network'
import RiskCompliance from './functional-groups/RiskCompliance'
import EmployeeUnion from './functional-groups/EmployeeUnion'
import InfoSys from './functional-groups/InformationSystems'

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
              <ControlledLink to="/onboarding/functional-groups/capital-projects">
                Capital Projects Group
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/corporate-services">
                Corporate Services
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/customer-relations">
                Customer Relations
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/enterprise-business">
                Enterprise Business
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/finance-service">
                Finance &amp; Service
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/hr-service">
                Human Resources
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/information-systems">
                Information Systems
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/internal-audit">
                Internal Audit and Forensics
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/marketing">
                Marketing
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/mobile-finance">
                Mobile Financial Services
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/network">
                Network Group
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/risk-and-compliance">
                Risk and Compliance
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/employee-union">
                Employee Union (SLOSA)
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/sales">
                Sales and Distribution
              </ControlledLink>

              {/* <ControlledLink to="/onboarding/functional-groups/employee-industrial">
                Employee &amp; Industrial
              </ControlledLink>
              <ControlledLink to="/onboarding/functional-groups/learning-development">
                Learning &amp; Development
              </ControlledLink> */}
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
              <ControlledLink to="/onboarding/about-mtn/ceo-welcome">
                CEO Welcome
              </ControlledLink>
              <ControlledLink to="/onboarding/about-mtn/company-overview">
                Company Overview
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
              {/* <ControlledLink to="/onboarding/about-mtn/tasks">
                Tasks
              </ControlledLink> */}
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
            <p
              css={`
                padding-top: 2rem;
                cursor: pointer;
              `}
              onClick={() => navigate('/onboarding/about-mtn/tasks')}
            >
              Tasks
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
  state = {
    aboutPages: this.props.aboutPages
    // overviewPage: {}
  }

  getPage = slug => {
    let { aboutPages } = this.props
    let page = aboutPages.find(page => page.slug === slug)
    return page
  }

  componentDidUpdate(prevProps) {
    if (this.props.aboutPages !== prevProps.aboutPages) {
      this.setState({ aboutPages: this.props.aboutPages })

      // let overviewPage = this.getPage('company-overview')
      // this.setState({ overviewPage })
    }
  }
  render() {
    let overviewPage = this.getPage('company-overview')
    let welcomePage = this.getPage('ceo-welcome')
    let missionPage = this.getPage('mission-and-vision')
    let valuePage = this.getPage('employee-value-proposition')
    let organisationPage = this.getPage('how-we-are-organised')
    let strategicPage = this.getPage('strategic-pillars-and-priorities')
    let tasksPage = this.getPage('tasks')

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
                  <CapitalProjects path="/capital-projects" />
                  <CorporateServices path="/corporate-services" />
                  <CustomerRelations path="/customer-relations" />
                  <EnterpriseBusiness path="/enterprise-business" />
                  <FinanceAndService path="/finance-service" />
                  {/* <EmployeeIndustrial path="/employee-industrial" /> */}
                  {/* <LearningDevelopment path="/learning-development" /> */}
                  <HRServices path="/hr-service" />
                  <InfoSys path="/information-systems" />
                  <IAForensics path="/internal-audit" />
                  <Marketing path="/marketing" />
                  <MobileFinancial path="/mobile-finance" />
                  <Network path="/network" />
                  <RiskCompliance path="/risk-and-compliance" />
                  <Sales path="/sales" />
                  <EmployeeUnion path="/employee-union" />
                </FunctionalGroups>
              </Scrolltop>
            </Router>
            <Router>
              <Scrolltop path="/">
                <AboutMTN path="about-mtn">
                  <CEOWelcome path="/ceo-welcome" page={welcomePage} />
                  <CompanyOverview
                    path="/company-overview"
                    page={overviewPage}
                  />
                  <MissionVision
                    path="/mission-and-vision"
                    page={missionPage}
                  />
                  <Organisation
                    path="/how-we-are-organised"
                    page={organisationPage}
                  />
                  <EmployeeValue
                    path="/employee-value-proposition"
                    page={valuePage}
                  />
                  <StrategicPillars
                    path="/strategic-pillars-and-priorities"
                    page={strategicPage}
                  />
                  <Tasks path="/tasks" page={tasksPage} />
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
  token: PropTypes.string,
  aboutPages: PropTypes.array
}

export default connect(state => ({
  token: state.token,
  aboutPages: state.pages.onboardingPages.aboutPages
}))(Onboarding)
