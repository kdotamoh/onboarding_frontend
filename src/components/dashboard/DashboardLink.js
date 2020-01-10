import React from 'react'
import { Link } from '@reach/router'

const DashboardLink = props => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        className: isPartiallyCurrent
          ? 'dashboard-navigation__item dashboard-navigation__item--active'
          : 'dashboard-navigation__item'
      }
    }}
  />
)

export default DashboardLink
