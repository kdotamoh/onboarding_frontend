import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, navigate } from '@reach/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import goBack from 'utils/go-back'
import Scrolltop from 'utils/scrolltop'
import { Button } from 'components/styled'

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

const Layout = styled.div`
  display: flex;
  width: 100%;

  .onboarding__menu {
    position: relative;
    min-height: 100vh;
    width: 20%;
    background-color: ${COLORS.LIGHT_GREY};

    @media (max-width: 768px) {
      display: none;
    }
  }

  .onboarding__main {
    padding: 5rem 10rem;
    background-color: #fff;
    width: 80%;
    min-height: 100vh;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      padding: 5rem 2rem;
    }
  }
`

// eslint-disable-next-line
const FunctionalGroups = ({ children }) => {
  return (
    <div>
      <SmallNav />
      <Layout>
        <div className="onboarding__menu">
          <div
            css={`
              height: 300px;
              width: 250px;
              position: absolute;
              right: 0;
            `}
          >
            <p
              css={`
                padding-left: 1.2rem;
              `}
            >
              Divisions
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
            </SideNav>
          </div>
        </div>
        <div className="onboarding__main">
          {/* <u style={{ cursor: 'pointer' }} onClick={() => goBack()}>
            {'< Back'}
          </u> */}
          <Button color="blue" textColor="white" onClick={() => goBack}>
            &lt; Back
          </Button>
          <div
            css={`
              width: 600px;
              height: 100%;

              @media (max-width: 768px) {
                width: 100%;
              }
            `}
          >
            {children}
          </div>
        </div>
      </Layout>
    </div>
  )
}

// eslint-disable-next-line
const AboutMTN = ({ children }) => {
  return (
    <div>
      <SmallNav />
      <Layout>
        <div className="onboarding__menu">
          <div
            css={`
              height: 300px;
              width: 250px;
              position: absolute;
              right: 0;
            `}
          >
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
              Divisions
            </p>
            <p
              css={`
                padding-top: 2rem;
                cursor: pointer;
              `}
              onClick={() => navigate('/onboarding/tasks')}
            >
              Tasks
            </p>
          </div>
        </div>
        <div className="onboarding__main">
          <u style={{ cursor: 'pointer' }} onClick={() => goBack()}>
            {'< Back'}
          </u>
          <div
            css={`
              width: 600px;

              @media (max-width: 768px) {
                width: 100%;
              }
            `}
          >
            {children}
          </div>
        </div>
      </Layout>
    </div>
  )
}

class Onboarding extends Component {
  state = {
    aboutPages: this.props.aboutPages
    // overviewPage: {}
  }

  getPage = (pageType, slug) => {
    let pages = this.props[pageType]
    let page = pages.find(page => page.slug === slug)
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
    // About MTN pages
    let overviewPage = this.getPage('aboutPages', 'company-overview')
    let welcomePage = this.getPage('aboutPages', 'ceo-welcome')
    let missionPage = this.getPage('aboutPages', 'mission-and-vision')
    let valuePage = this.getPage('aboutPages', 'employee-value-proposition')
    let organisationPage = this.getPage('aboutPages', 'how-we-are-organised')
    let strategicPage = this.getPage(
      'aboutPages',
      'strategic-pillars-and-priorities'
    )
    let tasksPage = this.getPage('aboutPages', 'tasks')

    // Divisions pages
    let capitalProjects = this.getPage('functionalPages', 'capital-projects') // prettier-ignore
    let functionalOverview = this.getPage('functionalPages', 'overview') // prettier-ignore
    let corporateServices = this.getPage('functionalPages', 'corporate-services') // prettier-ignore
    let customerRelations = this.getPage('functionalPages', 'customer-relations') // prettier-ignore
    let enterpriseBusiness = this.getPage('functionalPages', 'enterprise-business') // prettier-ignore
    let financeService = this.getPage('functionalPages', 'finance-service') // prettier-ignore
    let humanResources = this.getPage('functionalPages', 'hr-service') // prettier-ignore
    let informationSystems = this.getPage('functionalPages', 'information-systems') // prettier-ignore
    let internalAudit = this.getPage('functionalPages', 'internal-audit') // prettier-ignore
    let networkGroup = this.getPage('functionalPages', 'network') // prettier-ignore
    let marketing = this.getPage('functionalPages', 'marketing') // prettier-ignore
    let mobileFinance = this.getPage('functionalPages', 'mobile-finance') // prettier-ignore
    let riskCompliance = this.getPage('functionalPages', 'risk-and-compliance') // prettier-ignore
    let employeeUnion = this.getPage('functionalPages', 'employee-union') // prettier-ignore
    let sales = this.getPage('functionalPages', 'sales') // prettier-ignore

    const WrapTasks = () => {
      return (
        <div>
          <SmallNav />
          <Layout>
            <div className="onboarding__menu">
              <div
                css={`
                  height: 300px;
                  width: 250px;
                  position: absolute;
                  right: 0;
                `}
              >
                <p
                  css={`
                    padding-left: 1.2rem;
                  `}
                >
                  Tasks
                </p>
              </div>
            </div>
            <div className="onboarding__main">
              <u style={{ cursor: 'pointer' }} onClick={() => goBack()}>
                {'< Back'}
              </u>
              <div
                css={`
                  width: 600px;

                  @media (max-width: 768px) {
                    width: 100%;
                  }
                `}
              >
                <Tasks path="/tasks" page={tasksPage} />
              </div>
            </div>
          </Layout>
        </div>
      )
    }
    WrapTasks.propTypes = {
      children: PropTypes.node
    }

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
                <WrapTasks path="tasks">
                  <Tasks path="/tasks" page={tasksPage} />
                </WrapTasks>
              </Scrolltop>
            </Router>
            <Router>
              <Scrolltop path="/">
                <FunctionalGroups path="functional-groups">
                  <Overview path="/overview" page={functionalOverview} />
                  <CapitalProjects
                    path="/capital-projects"
                    page={capitalProjects}
                  />
                  <CorporateServices
                    path="/corporate-services"
                    page={corporateServices}
                  />
                  <CustomerRelations
                    path="/customer-relations"
                    page={customerRelations}
                  />
                  <EnterpriseBusiness
                    path="/enterprise-business"
                    page={enterpriseBusiness}
                  />
                  <FinanceAndService
                    path="/finance-service"
                    page={financeService}
                  />
                  {/* <EmployeeIndustrial path="/employee-industrial" /> */}
                  {/* <LearningDevelopment path="/learning-development" /> */}
                  <HRServices path="/hr-service" page={humanResources} />
                  <InfoSys
                    path="/information-systems"
                    page={informationSystems}
                  />
                  <IAForensics path="/internal-audit" page={internalAudit} />
                  <Marketing path="/marketing" page={marketing} />
                  <MobileFinancial
                    path="/mobile-finance"
                    page={mobileFinance}
                  />
                  <Network path="/network" page={networkGroup} />
                  <RiskCompliance
                    path="/risk-and-compliance"
                    page={riskCompliance}
                  />
                  <Sales path="/sales" page={sales} />
                  <EmployeeUnion path="/employee-union" page={employeeUnion} />
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
                  {/* <Tasks path="/tasks" page={tasksPage} /> */}
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
  aboutPages: state.pages.onboardingPages.aboutPages,
  functionalPages: state.pages.onboardingPages.functionalPages
}))(Onboarding)
