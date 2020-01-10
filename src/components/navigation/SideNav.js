import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import OnboardingLink from 'pages/onboarding/OnboardingLink'

const Wrapper = styled.div`
  /* background: black; */
  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
  transform: translateY(10rem);
`

export default class SideNav extends Component {
  render() {
    return (
      <Wrapper>
        <nav className="onboarding-navigation">
          <ul className="onboarding-navigation__items">
            {/* <li className="onboarding-navigation__item onboarding-navigation__item--active">
              Company Overview
            </li> */}
            <OnboardingLink to="/onboarding/company-overview">
              Company Overview
            </OnboardingLink>
            <OnboardingLink to="/onboarding/ceo-welcome">
              CEO Welcome
            </OnboardingLink>
            <OnboardingLink to="/onboarding/mission-and-vision">
              Mission &amp; Vision
            </OnboardingLink>
            <OnboardingLink to="/onboarding/how-we-are-organised">
              How we are organised
            </OnboardingLink>
            <OnboardingLink to="/onboarding/employee-value-proposition">
              Employee Value Proposition
            </OnboardingLink>
            <OnboardingLink to="/onboarding/strategic-pillars-and-priorities">
              Strategic Pillars &amp; Priorities
            </OnboardingLink>
            <OnboardingLink to="/onboarding/tasks">Tasks</OnboardingLink>
          </ul>
        </nav>
      </Wrapper>
    )
  }
}

// Sidebar on preonboarding pagges
const Navigation = styled.nav`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  padding: 0 3rem;
  font-size: 75%;
  margin-left: 12rem;

  ul {
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }

  a {
    text-decoration: unset;
    color: unset;
  }
`

export class Sidebar extends Component {
  render() {
    return <Navigation>{this.props.children}</Navigation>
  }
}

Sidebar.propTypes = {
  children: PropTypes.node
}
