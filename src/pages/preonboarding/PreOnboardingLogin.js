import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from './LoginForm'
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
    justify-content: center;

    div {
      width: 100%;
      height: 100%;
      /* min-height: fit-content; */
    }
  }
`

const Logo = styled.img`
  width: 30%;
  height: auto;
`

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
              Pre-onboarding
              <br />
              Log In
            </FormHeading>
          </div>
          <LoginForm next="/preonboarding/welcome" />
        </div>
      </Layout>
    )
  }
}
