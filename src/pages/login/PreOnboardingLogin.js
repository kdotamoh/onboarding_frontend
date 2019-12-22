import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from './LoginForm'
import { COLORS } from '../../constants'
import logo from 'images/mtn_logo.svg'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent
} from 'views/layout'

const Logo = styled.img``

export default class PreOnboardingLogin extends Component {
  render() {
    return (
      <SplitGrid fullPage leftWidth={50} rightWidth={50}>
        <SplitGridLeftColumn background={COLORS.MARIGOLD}>
          <CenterContent>
            <Logo src={logo} />
          </CenterContent>
        </SplitGridLeftColumn>
        <SplitGridRightColumn>
          <CenterContent>
            <LoginForm />
          </CenterContent>
        </SplitGridRightColumn>
      </SplitGrid>
    )
  }
}
