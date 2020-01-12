import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate, Location } from '@reach/router'

import goBack from 'utils/go-back'

import { COLORS } from '../../constants'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5rem;

  u {
    white-space: nowrap;
    font-size: 80%;
    align-self: center;
    cursor: pointer;
  }

  p {
    visibility: hidden;
  }
`

const Steps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Step = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;
  font-size: 50%;
  padding: 3px;
  background-clip: content-box;
  text-align: center;
  vertical-align: center;
  background-color: ${COLORS.TWILIGHT_BLUE};
  margin-right: 44px;

  /* Line */
  &::after {
    content: "";
    margin-left: 22px;
    display: block;
    width: 40px;
    height: 1px;
    background: ${COLORS.TWILIGHT_BLUE};
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
  }

&:last-child {
  margin-right: 0;
}

  &:last-child::after {
      display: none;
  }

  ${props =>
    props.isCurrent ? `box-shadow: 0 0 1px ${COLORS.TWILIGHT_BLUE};` : null}
  opacity: ${props => (props.isCurrent ? '90%' : '50%')};




`

export default class StepNav extends Component {
  state = {
    steps: [
      { path: '/preonboarding/info', isCurrent: false },
      { path: '/preonboarding/company-overview', isCurrent: false },
      { path: '/preonboarding/compliance', isCurrent: false },
      { path: '/preonboarding/code-of-ethics', isCurrent: false },
      { path: '/preonboarding/employee-details', isCurrent: false },
      { path: '/preonboarding/conditions-of-service', isCurrent: false },
      { path: '/preonboarding/introduce-yourself', isCurrent: false },
      { path: '/preonboarding/your-first-three-days', isCurrent: false }
    ]
  }

  componentDidMount() {
    console.log(this.props)
  }

  goTo = path => {
    navigate(path)
  }

  checkIsCurrent = (location, step) => {
    return location.pathname === step.path
  }

  render() {
    let { steps } = this.state
    return (
      <Location>
        {({ location }) => (
          <Container>
            <u onClick={() => goBack()}>{'< Back'}</u>
            <Steps>
              {steps &&
                steps.map((step, id) => (
                  <Step
                    onClick={() => this.goTo(step.path)}
                    key={id}
                    isCurrent={this.checkIsCurrent(location, step)}
                  >
                    {id + 1}
                  </Step>
                ))}
            </Steps>
            <p>hidden</p>
          </Container>
        )}
      </Location>
    )
  }
}
