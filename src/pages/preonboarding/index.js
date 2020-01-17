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

class PreOnboarding extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>MTN - Pre-onboarding</title>
        </Helmet>

        {this.props.token ? (
          <Router>
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
