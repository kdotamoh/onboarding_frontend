import React from 'react'
import { Link } from '@reach/router'

const ControlledLink = props => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        className: isPartiallyCurrent
          ? 'controlled-navigation__item controlled-navigation__item--active'
          : 'controlled-navigation__item'
      }
    }}
  />
)

export default ControlledLink
