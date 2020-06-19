import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from 'pages/preonboarding/LoginForm' // Todo: Change this
import { COLORS } from '../../constants'
import logo from 'images/mtn_logo.svg'

const FormHeading = styled.h2`
  color: ${COLORS.TWILIGHT_BLUE};
  text-align: left;
  width: 30rem;
  font-family: MTNBrighterSans-Regular;
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
      height: 50%;
    }
  }
`

const Logo = styled.img``

export default class PreOnboardingLogin extends Component {
  render() {
    return (
      <Layout>
        <div style={{ backgroundColor: COLORS.MARIGOLD }}>
          <Logo src={logo} />
        </div>
        <div>
          <div>
            <FormHeading>
              Onboarding
              <br />
              Log In
            </FormHeading>
          </div>
          <LoginForm next="/onboarding/home" />
        </div>
      </Layout>
    )
  }
}
