import React, { Component } from 'react'

import DashboardLink from 'components/dashboard/DashboardLink'
import { Img } from 'components/navigation'
import { ProfileDropdown } from 'components/dashboard/UserProfile'

import logo from 'images/mtn_logo.svg'

export default class DashboardNav extends Component {
  render() {
    return (
      <nav className="dashboard-navigation tour-step-3">
        <Img src={logo} />
        <ul className="dashboard-navigation__items">
          <DashboardLink to="/onboarding/dashboard">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </ul>
        {/* <UserProfile className="tour-step-4">user profile</UserProfile> */}
        <ProfileDropdown />
      </nav>
    )
  }
}
