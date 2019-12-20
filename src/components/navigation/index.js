import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

export const Nav = styled.nav`
  grid-area: nav;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background: violet;
`

const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 350px;
`

export const UserProfile = styled.div``

// const NavigationItem = styled.li`
// `

export default class Navigation extends Component {
  render() {
    return (
      <Nav className={this.props.className}>
        <div>home</div>
        <NavigationLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </NavigationLinks>
        <UserProfile className="tour-step-4">user profile</UserProfile>
      </Nav>
    )
  }
}

Navigation.propTypes = {
  className: PropTypes.object
}
