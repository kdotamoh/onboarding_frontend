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
    const { children } = this.props
    return (
      <Wrapper>
        <nav className="onboarding-navigation">
          <ul className="onboarding-navigation__items">
            {React.Children.map(children, child => (
              <OnboardingLink to={child.props.to}>
                {child.props.children}
              </OnboardingLink>
            ))}
          </ul>
        </nav>
      </Wrapper>
    )
  }
}

SideNav.propTypes = {
  children: PropTypes.node
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
