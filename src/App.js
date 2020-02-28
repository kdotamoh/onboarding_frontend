import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'

import GlobalStyles from './GlobalStyles'
import {
  getInsuranceProviders,
  getFuelProviders,
  getDepartments,
  getDivisions,
  getOnboardingPages
} from 'utils/get-thingy'

import PreOnboarding from 'pages/preonboarding'
import Onboarding from 'pages/onboarding'
// import NotFound from 'pages/onboarding'

class App extends React.Component {
  componentDidMount() {
    getInsuranceProviders(this.props.token)
    getFuelProviders(this.props.token)
    getDivisions(this.props.token)
    getDepartments(this.props.token)
    getOnboardingPages(this.props.token)
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>MTN</title>
        </Helmet>
        <GlobalStyles />
        <Router>
          <Onboarding path="onboarding/*" />
          <PreOnboarding path="preonboarding/*" />
          {/* <NotFound default /> */}
        </Router>
      </div>
    )
  }
}
App.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
}))(App)
