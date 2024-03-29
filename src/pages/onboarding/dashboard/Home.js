import React, { Component } from 'react'
import Joyride from 'react-joyride' //,
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Card } from 'components/card'
// import Navigation from 'components/navigation'
import Modal from 'components/modal'
import DashboardNav from 'components/navigation/DashboardNav'
import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'
import End from './End'

import { COLORS } from '../../../constants'
import { Img, H1, H2, Button } from 'components/styled'
import bgImg from 'images/bg_l_h_bottomright.svg'
import lightBulb from 'images/light_bulb.svg'

import { getTasks } from 'utils/get-thingy'

const StepOne = styled.div.attrs({
  className: 'tour-step-1'
})``

const StepTwo = styled(Card).attrs({
  className: 'tour-step-2'
})``

const StepThree = styled(DashboardNav).attrs({
  className: 'tour-step-3'
})``

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  max-height: 80%;
`

// const PaddedContent = styled(CenterContent)`
//   padding: 15rem;
//   transform: translateY(-9rem);
//   text-align: left;
//   /* align-items: start; */
// `

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
  z-index: 1000;
`

const ButtonGrape = styled(Button)`
  background: #db7371;
  border: #db7371;
  font-size: 1.2rem;
`

// StepFour is the UserProfile component in 'components/navigation',
// to which I've attached the class '.tour-step-4'

// const FakeBeacon = () => <div>s</div>

// Custom tour component

// const Tooltip = ({
//   continuous,
//   index,
//   step,
//   backProps,
//   closeProps,
//   primaryProps,
//   tooltipProps
// }) => (
//   <TooltipBody {...tooltipProps}>
//     {step.title && <TooltipTitle>{step.title}</TooltipTitle>}
//     <TooltipContent>{step.content}</TooltipContent>
//     <TooltipFooter>
//       {index > 0 && (
//         <Button {...backProps}>
//           <FormattedMessage id="back" />
//         </Button>
//       )}
//       {continuous && (
//         <Button {...primaryProps}>
//           <FormattedMessage id="next" />
//         </Button>
//       )}
//       {!continuous && (
//         <Button {...closeProps}>
//           <FormattedMessage id="close" />
//         </Button>
//       )}
//     </TooltipFooter>
//   </TooltipBody>
// )

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 7rem);

  .layout__section {
    width: 50%;
    display: flex;
    padding: 10rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .layout__section {
      padding: 3rem;
      width: 100%;
      height: 100%;
    }
  }
`

class Welcome extends Component {
  state = {
    steps: [
      {
        target: '.tour-step-1',
        content: '1. Your welcome message appears here.',
        disableBeacon: true
      },
      {
        target: '.tour-step-2',
        content: '2. Your task and event notifications appear here.'
      },
      {
        target: '.tour-step-3',
        content:
          '3. Your menu bar with links to view all your events and tasks.'
      },
      { target: '.tour-step-4', content: '4. Your log out and profile.' }
    ],
    visible: false,
    runTour: false,
    onboardingComplete: false
  }

  handleStartTour = async () => {
    this.setState({ visible: false }, () => this.setState({ runTour: true }))
  }

  handleCompleteTour = () => {
    localStorage.setItem('onboardingTourComplete', 'true')
    navigate('/onboarding/about-mtn/ceo-welcome')
  }

  componentDidMount() {
    let tourComplete = localStorage.getItem('onboardingTourComplete')
    if (tourComplete !== 'true') {
      this.setState({ visible: true })
    }
    let onboardingComplete = localStorage.getItem('onboardingComplete')
    this.setState({ onboardingComplete })

    getTasks(this.props.token)
  }

  render() {
    const { steps, visible, runTour } = this.state
    const {
      user: { first_name }
    } = this.props

    return (
      <div>
        {this.state.onboardingComplete ? (
          <End />
        ) : (
          <React.Fragment>
            <StepThree>
              <DashboardLink to="/onboarding/home">Home</DashboardLink>
              <DashboardLink to="/onboarding/events">Events</DashboardLink>
              <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
            </StepThree>
            <Layout>
              <div
                className="layout__section"
                style={{ background: COLORS.LIGHTER_MARIGOLD }}
              >
                <StepOne>
                  <HeroH1>Yello, {first_name}!</HeroH1>
                  <p>
                    Congratulations and on behalf of all MTNers, welcome to the
                    Yello Family.
                    <br />
                    <br />
                    We are truly happy that you have decided to join our team.
                    We believe that you will be an asset to our cherished
                    organization.
                    <br />
                    <br />
                    We welcome you to MTN Ghana, we are very glad to have you
                    with us and look forward to a mutually beneficial
                    relationship and partnership.
                    <br />
                    <br />
                    Once again, welcome aboard.
                  </p>
                </StepOne>
              </div>
              <div
                className="layout__section"
                style={{ background: COLORS.PALE_MARIGOLD }}
              >
                <StepTwo p="4rem">
                  <H2>Onboarding</H2>
                  {/* <p>Text here</p> */}
                  <Button
                    mt="3rem"
                    color="blue"
                    onClick={this.handleCompleteTour}
                  >
                    Start now &gt;
                  </Button>
                </StepTwo>
                <BgImg src={bgImg} />
              </div>
            </Layout>
            <Joyride
              continuous
              steps={steps}
              skipBeason={true}
              run={runTour}
              beaconComponent={null}
              showSkipButton={true}
              callback={this.handleJoyrideCallback}
              styles={{
                options: {
                  zIndex: 1000
                }
              }}
            />
            <Modal visible={visible}>
              <img
                src={lightBulb}
                alt=""
                css={`
                  margin-bottom: 2rem;
                `}
              />
              <p
                css={`
                  font-size: 2rem;
                  font-family: MTNBrighterSans-Regular;
                `}
              >
                Welcome! Get familiar with your MTN dashboard.
              </p>
              <ButtonGrape onClick={() => this.handleStartTour()}>
                See how your dashboard works &gt;
              </ButtonGrape>
            </Modal>
          </React.Fragment>
        )}
      </div>
    )
  }
}
Welcome.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  }),
  token: PropTypes.string
}

export default connect(state => ({
  user: state.user,
  token: state.token
}))(Welcome)
