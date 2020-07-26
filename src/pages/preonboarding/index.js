import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
import EmployeeDetails from './EmployeeDetails'

// const routes = [
//   { key: '/', path: '/', component: <PreOnboardingLogin /> },
//   { key: 'welcome', path: 'welcome', component: <Welcome /> },
//   { key: 'info', path: 'info', component: <Info /> },
//   {
//     key: 'company-overview',
//     path: 'company-overview',
//     component: <CompanyOverview />
//   },
//   { key: 'compliance', path: 'compliance', component: <Compliance /> },
//   { key: 'code-of-ethics', path: 'code-of-ethics', component: <CodeEthics /> },
//   {
//     key: 'employee-details',
//     path: 'employee-details',
//     component: <EmployeeDetails />
//   },
//   {
//     key: 'conditions-of-service',
//     path: 'conditions-of-service',
//     component: <ConditionsService />
//   },
//   {
//     key: 'introduce-yoursel',
//     path: 'introduce-yoursel',
//     component: <Introduction />
//   },
//   {
//     key: 'your-first-three-days',
//     path: 'your-first-three-days',
//     component: <FirstDays />
//   },
//   { key: 'end', path: 'end', component: <End /> }
// ]

class PreOnboarding extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MTN - Pre-onboarding</title>
        </Helmet>

        {this.props.token ? (
          <Router>
            {/* {routes.map(route => (

            ))} */}
            <Scrolltop path="/">
              <PreOnboardingLogin path="/" />
              <Welcome path="welcome" />
              <Info path="info" />
              <CompanyOverview path="company-overview" />
              <Compliance path="compliance" />
              <CodeEthics path="code-of-ethics" />
              <EmployeeDetails path="employee-details" />
              <ConditionsService path="conditions-of-service" />
              <Introduction path="introduce-yourself" />
              <FirstDays path="your-first-three-days" />
              <End path="end" />
            </Scrolltop>
          </Router>
        ) : (
          <Router>
            <PreOnboardingLogin path="/*" />
          </Router>
        )}
      </>
    )
  }
}
PreOnboarding.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
}))(PreOnboarding)
