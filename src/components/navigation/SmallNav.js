import React, { Component } from 'react'
import styled from 'styled-components'

import {
  COLORS,
  SMALL_NAV_HEIGHT,
  PADDING_RIGHT,
  PADDING_LEFT
} from '../../constants'
import MTNLogo from 'images/mtn_logo.svg'

const Nav = styled.nav`
  background: ${COLORS.MARIGOLD};
  height: ${SMALL_NAV_HEIGHT}rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: ${PADDING_LEFT}rem;
  padding-right: ${PADDING_RIGHT}rem;
`

const Img = styled.img`
  height: 80%;
`

export default class SmallNav extends Component {
  render() {
    return (
      <Nav>
        <Img src={MTNLogo} />
      </Nav>
    )
  }
}
