import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { COLORS, NAV_HEIGHT } from '../../constants'
import logo from 'images/mtn_logo.svg'
import NavLink from './NavLink'

export const Nav = styled.nav`
  grid-area: nav;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  height: ${NAV_HEIGHT}px;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.MARIGOLD};
`

const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  list-style: none;
  height: 100%;
`

const LinkWrapper = styled.li`
  text-transform: uppercase;
  font-weight: bold;

  a {
    justify-content: flex-end;
    text-decoration: none;
    height: 100%;
    border-bottom: 5px solid ${COLORS.GREYISH_BROWN};
    padding: 2rem;
    padding-bottom: 3.5rem;
    vertical-align: middle;
    color: ;
  }
`

const Img = styled.img`
  height: 75%;
`

export const UserProfile = styled.div``

const activeClassName = 'active'
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    opacity: 30%;
  }
`
export default class Navigation extends Component {
  render() {
    return (
      <Nav className={this.props.className}>
        <Img src={logo} />
        <NavigationLinks>
          <LinkWrapper>
            <StyledNavLink to="/">Home</StyledNavLink>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/">Home</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link to="/">Home</Link>
          </LinkWrapper>
        </NavigationLinks>
        <UserProfile className="tour-step-4">user profile</UserProfile>
      </Nav>
    )
  }
}

Navigation.propTypes = {
  className: PropTypes.object
}
