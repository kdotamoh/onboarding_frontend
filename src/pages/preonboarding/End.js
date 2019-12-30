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
import { Card, CardInfo } from 'components/card'

import bgImg from 'images/bg_l_bottomleft.svg'
import placeholder from 'images/png/placeholder.png'

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
  z-index: 1000;
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
            <Card p="2rem">
              <CardInfo>
                <div className="card-info__left">
                  <div className="card-info__image card-info__circle"></div>
                </div>

                <hr />

                <div className="card-info__right">
                  <div className="card-info__details">
                    <h5>Your First Day</h5>
                    <span>Sep 10 2019 | 11:00 am</span>
                    <span>MTN House, #6 Independence Avenue,</span>
                    <span>West Ridge, Accra</span>
                    <span>GA-052-4025</span>
                  </div>
                </div>
              </CardInfo>

              <CardInfo>
                <div className="card-info__left">
                  <img className="card-info__image" src={placeholder} alt="" />
                </div>
                <div className="card-info__right">
                  <div className="card-info__details">
                    <h5>Your HR Business Partner</h5>
                    <span>Esi Amegache</span>
                    <span>024 412 3456</span>
                    <span>esi.amegache@company.com</span>
                  </div>
                </div>
              </CardInfo>
            </Card>
          </CenterContent>
        </SplitGridRightColumn>
      </SplitGrid>
    )
  }
}
