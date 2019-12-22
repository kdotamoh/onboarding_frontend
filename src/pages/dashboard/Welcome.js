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

// StepFour is the UserProfile component in 'components/navigation',
// to which I've attached the class '.tour-step-4'

const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
`

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
          <StepThree background={COLORS.MARIGOLD} />
          <GridMain>
            <SplitGrid leftWidth={50} rightWidth={50}>
              <SplitGridLeftColumn background={COLORS.LIGHTER_MARIGOLD}>
                <CenterContent>
                  <StepOne></StepOne>
                </CenterContent>
              </SplitGridLeftColumn>
              <SplitGridRightColumn background={COLORS.PALE_MARIGOLD}>
                <CenterContent>
                  <StepTwo />
                </CenterContent>
                <Img src={bgImg} />
              </SplitGridRightColumn>
            </SplitGrid>
          </GridMain>
        </FullPageGrid>
        <Joyride continuous steps={steps} />
      </React.Fragment>
    )
  }
}
