import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DashboardLink from 'components/dashboard/DashboardLink'
import { Img } from 'components/navigation'
import { ProfileDropdown } from 'components/dashboard/UserProfile'

import logo from 'images/mtn_logo.svg'

export default class DashboardNav extends Component {
  render() {
    const { children } = this.props

    return (
      <nav className="dashboard-navigation tour-step-3">
        <Img src={logo} />
        <ul className="dashboard-navigation__items">
          {React.Children.map(children, child => (
            <DashboardLink to={child.props.to}>
              {child.props.children}
            </DashboardLink>
          ))}
          {/* <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink> */}
        </ul>
        {/* <UserProfile className="tour-step-4">user profile</UserProfile> */}
        <ProfileDropdown />
      </nav>
    )
  }
}
DashboardNav.propTypes = {
  children: PropTypes.node
}
