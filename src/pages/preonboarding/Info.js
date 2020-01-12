import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { Card, CardInfo } from 'components/card'
import { SmallNav, StepNav } from 'components/navigation'
import { Button, H3, Container } from 'components/styled'

import { COLORS } from '../../constants'
import bgImg from 'images/bg_l_bottomright.svg'
import placeholder from 'images/png/placeholder.png'

const ContainerWithBackground = styled(Container)`
  justify-content: center;
  background: ${COLORS.PALE_MARIGOLD};
`

const BgImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Header = styled(H3)`
  color: ${COLORS.TWILIGHT_BLUE};
`

export default class Info extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <ContainerWithBackground>
          <StepNav />
          <Header>Where &amp; When</Header>
          <Card mb="3rem" p="2rem">
            <CardInfo>
              <div className="card-info__left">
                <div className="card-info__image card-info__circle">
                  <span className="month">SEP</span>
                  <span className="day">10</span>
                </div>
              </div>

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

            <hr />

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
          <Button
            onClick={() => navigate('/preonboarding/company-overview')}
            color="blue"
            fontSize={1.6}
            p="4rem"
          >
            Next Step >
          </Button>
          <BgImg src={bgImg} />
        </ContainerWithBackground>
      </div>
    )
  }
}
