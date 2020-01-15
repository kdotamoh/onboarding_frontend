import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Card } from 'components/card'
// import Navigation from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent,
  FullPageGrid,
  GridMain
} from 'views/layout'
import { COLORS } from '../../../constants'
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

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
  z-index: 1000;
`

// TODO: This is a temp page to card the end of onboarding.
class End extends Component {
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
    const {
      user: { first_name }
    } = this.props

    return (
      <React.Fragment>
        <FullPageGrid>
          <StepThree>
            <DashboardLink to="/onboarding/end">Home</DashboardLink>
            <DashboardLink to="/onboarding/events">Events</DashboardLink>
            <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
          </StepThree>
          <GridMain>
            <SplitGrid leftWidth={50} rightWidth={50}>
              <SplitGridLeftColumn background={COLORS.LIGHTER_MARIGOLD}>
                <CenterContent>
                  <div style={{ width: '50rem' }}>
                    <StepOne
                      css={`
                        transform: translateY(-10rem);
                      `}
                    >
                      <HeroH1>
                        Congrats on completing your onboarding, {first_name}
                      </HeroH1>
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
                      onClick={() =>
                        navigate('/onboarding/about-mtn/company-overview')
                      }
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
      </React.Fragment>
    )
  }
}
End.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  })
}

export default connect(state => ({
  user: state.user
}))(End)