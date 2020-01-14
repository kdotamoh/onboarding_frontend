import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from 'pages/preonboarding/LoginForm' // Todo: Change this
import { COLORS } from '../../constants'
import logo from 'images/mtn_logo.svg'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent
} from 'views/layout'

const TranslateCenter = styled(CenterContent)`
  transform: translateX(-10rem);
`
const FormHeading = styled.h2`
  color: ${COLORS.TWILIGHT_BLUE};
  text-align: left;
  width: 30rem;
  font-family: MTNBrighterSans-Regular;
`

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
          <TranslateCenter>
            <div>
              <FormHeading>
                Onboarding
                <br />
                Log In
              </FormHeading>
              <LoginForm next="/onboarding/about-mtn/company-overview" />
            </div>
          </TranslateCenter>
        </SplitGridRightColumn>
      </SplitGrid>
    )
  }
}
