import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { COLORS } from '../../constants'
import { Img } from 'components/styled'
import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent
} from 'views/layout'
import { H1, P } from 'components/styled'
import { Card } from 'components/card'

import bgImg from 'images/bg_l_bottomleft.svg'

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
`

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
  align-self: flex-end;
`

const Paragraph = styled(P)`
  margin-bottom: 2.5rem;
  line-height: 1.8;
`

const PaddedContent = styled(CenterContent)`
  padding: 10rem;
  transform: translateX(10rem);
  text-align: left;
  align-items: start;
`

export default class End extends Component {
  nextPage = () => {
    navigate('/preonboarding/info')
  }

  render() {
    return (
      <SplitGrid fullPage leftWidth={40} rightWidth={60}>
        <SplitGridLeftColumn background={COLORS.MARIGOLD}>
          <PaddedContent>
            <HeroH1>Congrats on completing your pre-onboarding, Edward.</HeroH1>
            <Paragraph>We look forward to seeing you soon.</Paragraph>
          </PaddedContent>
          <BgImg src={bgImg} />
        </SplitGridLeftColumn>
        <SplitGridRightColumn background={COLORS.MARIGOLD}>
          <CenterContent>
            <Card></Card>
          </CenterContent>
        </SplitGridRightColumn>
      </SplitGrid>
    )
  }
}
