import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router } from '@reach/router'
import { Helmet } from 'react-helmet'
import {
  BrowserView,
  MobileView,
  CustomView,
  browserName
  // isBrowser,
  // isMobile
} from 'react-device-detect'

import { COLORS } from './constants'
import logo from 'images/mtn_logo.svg'

import GlobalStyles from './GlobalStyles'
import {
  getInsuranceProviders,
  getFuelProviders,
  getDepartments,
  getDivisions,
  getAboutPages,
  getFunctionalPages,
  getPreonboardingPages,
  getValueProposition
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
    getAboutPages(this.props.token)
    getFunctionalPages(this.props.token)
    getPreonboardingPages(this.props.token)
    getValueProposition(this.props.token)
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>MTN</title>
        </Helmet>
        <GlobalStyles />
        <BrowserView>
          <Router>
            <Onboarding path="onboarding/*" />
            <PreOnboarding path="preonboarding/*" />
            {/* <NotFound default /> */}
          </Router>
        </BrowserView>
        <MobileView
          style={{
            backgroundColor: COLORS.MARIGOLD,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '10rem', width: 'auto', marginBottom: '1rem' }}
            src={logo}
            alt=""
          />
          <div style={{ width: '65vw', textAlign: 'center' }}>
            <span style={{ color: 'white' }}>
              Please access this site on a desktop or laptop for the best
              experience.
            </span>
          </div>
        </MobileView>
        <CustomView
          style={{
            backgroundColor: COLORS.MARIGOLD,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          condition={browserName === 'Safari'}
        >
          <img
            style={{ height: '10rem', width: 'auto', marginBottom: '1rem' }}
            src={logo}
            alt=""
          />
          <span style={{ color: 'white' }}>
            Please access this site in Chrome or Firefox for the best
            experience.
          </span>
        </CustomView>
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
