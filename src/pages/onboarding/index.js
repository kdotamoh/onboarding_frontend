import React, { Component } from 'react'
import { Router } from '@reach/router'

import OnboardingPages from './Onboarding'
import OnboardingLogin from './OnboardingLogin'
export default class Onboarding extends Component {
  render() {
    return (
      <Router>
        <OnboardingLogin path="/" />
        <OnboardingPages path="/onboarding" />
      </Router>
    )
  }
}
