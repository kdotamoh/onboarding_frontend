import React, { Component } from 'react'

import DashboardLink from 'components/dashboard/DashboardLink'
import { Img, UserProfile } from 'components/navigation'

import logo from 'images/mtn_logo.svg'

export default class DashboardNav extends Component {
  render() {
    return (
      <nav className="dashboard-navigation">
        <Img src={logo} />
        <ul className="dashboard-navigation__items">
          <DashboardLink to="/dashboard/home">Home</DashboardLink>
          <DashboardLink to="/dashboard/events">Events</DashboardLink>
          <DashboardLink to="/dashboard/tasks">Tasks</DashboardLink>
        </ul>
        <UserProfile className="tour-step-4">user profile</UserProfile>
      </nav>
    )
  }
}
