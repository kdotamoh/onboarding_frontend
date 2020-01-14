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

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent,
  FullPageGrid,
  GridMain
} from 'views/layout'
import { COLORS } from '../../constants'
import { Img, H1, H2, Button } from 'components/styled'
import bgImg from 'images/bg_l_h_bottomright.svg'

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
    // visible: true,
    runTour: false
  }

  handleStartTour = async () => {
    this.setState({ visible: false }, () => this.setState({ runTour: true }))
  }

  render() {
    const { steps, visible, runTour } = this.state
    const {
      user: { first_name }
    } = this.props

    return (
      <React.Fragment>
        <FullPageGrid>
          <StepThree />
          <GridMain>
            <SplitGrid leftWidth={50} rightWidth={50}>
              <SplitGridLeftColumn background={COLORS.LIGHTER_MARIGOLD}>
                <CenterContent>
                  <div style={{ width: '50rem' }}>
                    <StepOne>
                      <HeroH1>Welcome back, {first_name}</HeroH1>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur, officiis. Placeat assumenda cum quas
                        officia, iste veritatis voluptates sit nostrum natus
                        consectetur voluptas quaerat vel id, voluptate dolor
                        quidem ut?
                      </p>
                    </StepOne>
                  </div>
                </CenterContent>
              </SplitGridLeftColumn>
              <SplitGridRightColumn background={COLORS.PALE_MARIGOLD}>
                <CenterContent>
                  <StepTwo p="4rem">
                    <H2>Onboarding</H2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro accusantium iure magnam praesentium exercitationem,
                    </p>
                    <Button
                      mt="3rem"
                      color="blue"
                      onClick={() => navigate('/onboarding/company-overview')}
                    >
                      Start now >
                    </Button>
                  </StepTwo>
                </CenterContent>
                <BgImg src={bgImg} />
              </SplitGridRightColumn>
            </SplitGrid>
          </GridMain>
        </FullPageGrid>
        <Joyride
          continuous
          steps={steps}
          skipBeason={true}
          run={runTour}
          beaconComponent={null}
          showSkipButton={true}
          callback={this.handleJoyrideCallback}
        />
        <Modal visible={visible}>
          Welcome! Get familiar with your MTN dashboard.
          <ButtonGrape onClick={() => this.handleStartTour()}>
            See how your dashboard works >
          </ButtonGrape>
        </Modal>
      </React.Fragment>
    )
  }
}
Welcome.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  })
}

export default connect(state => ({
  user: state.user
}))(Welcome)
