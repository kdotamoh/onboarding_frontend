import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

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

  ${props =>
    props.isCurrent ? `box-shadow: 0 0 1px ${COLORS.TWILIGHT_BLUE};` : null}
  opacity: ${props => (props.isCurrent ? '100%' : '50%')};

  /* Line */
  &::after {
    content: "";
    border-bottom: solid 1px #fff;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
}
`

export default class StepNav extends Component {
  state = {
    steps: [
      { path: '/preonboarding/info', isCurrent: true },
      { path: '/preonboarding/company-overview', isCurrent: false }
    ]
  }

  componentDidMount() {
    console.log(this.props)
  }

  goBack = () => {
    window.history.back()
  }

  goTo = path => {
    navigate(`${path}`)
  }

  render() {
    let { steps } = this.state
    return (
      <Container>
        <u onClick={this.goBack}>{`< Back`}</u> {/* eslint-disable-line */}
        <Steps>
          {steps &&
            steps.map((step, id) => (
              <Step
                onClick={() => this.goTo(step.path)}
                key={id}
                isCurrent={step.isCurrent}
              >
                {id + 1}
              </Step>
            ))}
        </Steps>
        <p>hidden</p>
      </Container>
    )
  }
}
