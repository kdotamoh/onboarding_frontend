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
            <SplitGrid>
              <SplitGridLeftColumn>
                <CenterContent>
                  <StepOne>Message</StepOne>
                </CenterContent>
              </SplitGridLeftColumn>
              <SplitGridRightColumn>
                <CenterContent>
                  <StepTwo />
                </CenterContent>
              </SplitGridRightColumn>
            </SplitGrid>
          </GridMain>
        </FullPageGrid>
        <Joyride continuous steps={steps} />
      </React.Fragment>
    )
  }
}
