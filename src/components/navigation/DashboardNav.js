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
          <DashboardLink to="/dashboard/home">Home</DashboardLink>
          <DashboardLink to="/dashboard/events">Events</DashboardLink>
          <DashboardLink to="/dashboard/tasks">Tasks</DashboardLink>
        </ul>
        {/* <UserProfile className="tour-step-4">user profile</UserProfile> */}
        <ProfileDropdown />
      </nav>
    )
  }
}
