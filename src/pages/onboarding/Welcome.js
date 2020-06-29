import React, { Component } from 'react'
import Joyride from 'react-joyride' //,
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Card } from 'components/card'
import Navigation from 'components/navigation'
import { CenterContent } from 'views/layout'
import { COLORS } from '../../constants'
import { Img } from 'components/styled'
import bgImg from 'images/bg_l_h_bottomright.svg'

import { getFunctionalPages, getAboutPages } from 'utils/get-thingy'

const StepOne = styled.div.attrs({
  className: 'tour-step-1'
})``

const StepTwo = styled(Card).attrs({
  className: 'tour-step-2'
})``

const StepThree = styled(Navigation).attrs({
  className: 'tour-step-3'
})``

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
`

// StepFour is the UserProfile component in 'components/navigation',
// to which I've attached the class '.tour-step-4'

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

class Welcome extends Component {
  state = {
    steps: [
      { target: '.tour-step-1', content: 'First step' },
      { target: '.tour-step-2', content: 'Second step' },
      { target: '.tour-step-3', content: 'Third step' },
      { target: '.tour-step-4', content: 'Fourth step' }
    ]
  }

  componentDidMount() {
    if (!this.props.aboutLoaded || !this.props.functionalLoaded) {
      getFunctionalPages(this.props.token)
      getAboutPages(this.props.token)
    }
  }

  render() {
    const { steps } = this.state

    return (
      <React.Fragment>
        <StepThree />
        <Layout>
          <div style={{ background: COLORS.LIGHTER_MARIGOLD }}>
            <CenterContent>
              <StepOne></StepOne>
            </CenterContent>
          </div>
          <div style={{ background: COLORS.PALE_MARIGOLD }}>
            <CenterContent>
              <StepTwo />
            </CenterContent>
            <BgImg src={bgImg} />
          </div>
        </Layout>
        <Joyride
          continuous
          steps={steps}
          styles={{
            options: {
              zIndex: 1000
            }
          }}
        />
      </React.Fragment>
    )
  }
}
Welcome.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  }),
  token: PropTypes.string,
  aboutLoaded: PropTypes.bool,
  functionalLoaded: PropTypes.bool
}
export default connect(state => ({
  user: state.user,
  token: state.token,
  aboutLoaded: state.pages.onboardingPages.aboutLoaded,
  functionalLoaded: state.pages.onboardingPages.functionalLoaded
}))(Welcome)
