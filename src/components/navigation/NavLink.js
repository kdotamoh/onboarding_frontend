import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        className: isPartiallyCurrent
          ? 'navigation__item navigation__item--active'
          : 'navigation__item'
      }
    }}
  />
)

export default NavLink
