import React, { Component } from 'react'
import { Router } from '@reach/router'

import OnboardingPages from './Onboarding'

export default class Onboarding extends Component {
  render() {
    return (
      <Router>
        <OnboardingPages path="/" />
      </Router>
    )
  }
}
