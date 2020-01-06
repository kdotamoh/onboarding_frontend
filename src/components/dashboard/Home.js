import React, { Component } from 'react'
import Joyride from 'react-joyride' //,
import styled from 'styled-components'

import { Card } from 'components/card'
import Navigation from 'components/navigation'
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

const StepThree = styled(Navigation).attrs({
  className: 'tour-step-3'
})``

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
`

const PaddedContent = styled(CenterContent)`
  padding: 10rem;
  transform: translateX(10rem);
  text-align: left;
  align-items: start;
`

// StepFour is the UserProfile component in 'components/navigation',
// to which I've attached the class '.tour-step-4'

export default class Welcome extends Component {
  state = {
    steps: [
      { target: '.tour-step-1', content: 'First step' },
      { target: '.tour-step-2', content: 'Second step' },
      { target: '.tour-step-3', content: 'Third step' },
      { target: '.tour-step-4', content: 'Fourth step' }
    ]
  }

  render() {
    const { steps } = this.state

    return (
      <React.Fragment>
        <FullPageGrid>
          <StepThree />
          <GridMain>
            <SplitGrid leftWidth={50} rightWidth={50}>
              <SplitGridLeftColumn background={COLORS.LIGHTER_MARIGOLD}>
                <PaddedContent>
                  <StepOne>
                    <H1>Welcome back, Edward</H1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, officiis. Placeat assumenda cum quas officia,
                      iste veritatis voluptates sit nostrum natus consectetur
                      voluptas quaerat vel id, voluptate dolor quidem ut?
                    </p>
                  </StepOne>
                </PaddedContent>
              </SplitGridLeftColumn>
              <SplitGridRightColumn background={COLORS.PALE_MARIGOLD}>
                <CenterContent>
                  <StepTwo p="2rem">
                    <H2>Onboarding</H2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro accusantium iure magnam praesentium exercitationem,
                      quis tenetur sapiente, amet ab quod quisquam et, libero
                      assumenda velit? Quis, tempora saepe. Sunt, doloremque!
                    </p>
                    <Button color="blue">Start now ></Button>
                  </StepTwo>
                </CenterContent>
                <BgImg src={bgImg} />
              </SplitGridRightColumn>
            </SplitGrid>
          </GridMain>
        </FullPageGrid>
        <Joyride continuous steps={steps} />
      </React.Fragment>
    )
  }
}
