import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate, Location } from '@reach/router'
import { connect } from 'react-redux'

import { setCurrentStep } from 'store/navigation'
import store from 'store/index'

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;

    u {
      white-space: nowrap;
      font-size: 80%;
      align-self: flex-start;
      cursor: pointer;
      padding-left: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
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

  @media(max-width: 768px) {
    margin-right: 15px;
    width: 3rem;
    height: 3rem;
  }

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

    @media(max-width: 768px) {
      /* margin-left: 2px; */
      width: 23px;
    }
  }

&:last-child {
  margin-right: 0;
}

  &:last-child::after {
      display: none;
  }

  ${props =>
    props.isCurrent ? `box-shadow: 0 0 1px ${COLORS.TWILIGHT_BLUE};` : null}
  opacity: ${props => (props.isCurrent ? '0.9' : '0.5')};
`

class StepNav extends Component {
  state = {
    steps: [
      { id: 1, path: '/preonboarding/info', isCurrent: false },
      { id: 2, path: '/preonboarding/company-overview', isCurrent: false },
      { id: 3, path: '/preonboarding/compliance', isCurrent: false },
      { id: 4, path: '/preonboarding/code-of-ethics', isCurrent: false },
      { id: 5, path: '/preonboarding/employee-details', isCurrent: false },
      { id: 6, path: '/preonboarding/conditions-of-service', isCurrent: false },
      { id: 7, path: '/preonboarding/introduce-yourself', isCurrent: false },
      { id: 8, path: '/preonboarding/your-first-three-days', isCurrent: false }
    ]
  }

  componentDidMount() {
    const currentStep = this.state.steps.find(
      step => step.path === window.location.pathname
    ).id
    store.dispatch(setCurrentStep(currentStep))
  }

  goTo = async step => {
    if (step.id > this.props.currentStep) {
      return
    }
    store.dispatch(setCurrentStep(step.id))
    navigate(step.path)
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
                steps.map(step => (
                  <Step
                    onClick={() => this.goTo(step)}
                    key={step.id}
                    isCurrent={this.checkIsCurrent(location, step)}
                  >
                    {step.id}
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
StepNav.propTypes = {
  currentStep: PropTypes.number
}

export default connect(state => ({
  currentStep: state.navigation.currentStep
}))(StepNav)
