import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'
import { Img } from 'components/navigation'
import { ProfileDropdown } from 'pages/onboarding/dashboard/UserProfile'

import logo from 'images/mtn_logo.svg'

export default class DashboardNav extends Component {
  render() {
    const { children } = this.props

    return (
      <nav className="dashboard-navigation tour-step-3">
        <Img src={logo} className="dashboard-navigation__logo" />
        <ul className="dashboard-navigation__items">
          {React.Children.map(children, child => (
            <DashboardLink to={child.props.to}>
              {child.props.children}
            </DashboardLink>
          ))}
        </ul>
        <ProfileDropdown className="dashboard-navigation__profile" />
      </nav>
    )
  }
}
DashboardNav.propTypes = {
  children: PropTypes.node
}
