import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav } from 'components/navigation'
import { H4, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/first_days_hero.svg'
// import property from 'images/compliance_property.svg'
// import ip from 'images/compliance_ip.svg'
// import whistleblowing from 'images/compliance_whistleblowing.svg'

// import { COLORS } from '../../constants'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 26.1rem;
  width: 100%;
`

export default class FirstDays extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <Container>
          <H4>Your First Three Days</H4>
          <Hero>
            <div className="row">
              <p className="column">
                We’re super excited and preparing towards your first day. You
                will be taken through a three-day formal onboarding programme,
                after which your onboarding will continue within your
                department.
              </p>
              <img className="column" src={heroImg} alt="" />
            </div>
          </Hero>

          <Button
            color="blue"
            onClick={() => navigate('/preonboarding/first-three-days')}
          >
            Finish >
          </Button>
          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
        </Container>
      </div>
    )
  }
}
