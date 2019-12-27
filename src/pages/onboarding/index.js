import React, { Component } from 'react'
import { Router } from '@reach/router'

import EmployeeDetails from './EmployeeDetails'

export default class Onboarding extends Component {
  render() {
    return (
      <Router>
        <EmployeeDetails path="employee-details" />
      </Router>
    )
  }
}
