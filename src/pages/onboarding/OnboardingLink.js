import React from 'react'
import { Link } from '@reach/router'

const OnboardingLink = props => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        className: isPartiallyCurrent
          ? 'onboarding-navigation__item onboarding-navigation__item--active'
          : 'onboarding-navigation__item'
      }
    }}
  />
)

export default OnboardingLink
