import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav } from 'components/navigation'
import { H4, Container, Img, Button, Small } from 'components/styled'
import {
  Hero,
  SplitGridRightColumn,
  SplitGridLeftColumn,
  SplitGrid
} from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'

import heroImg from 'images/conditions_service_hero.svg'

// import { COLORS } from '../../constants'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`

const BgImgContainer = styled.div`
  position: relative;
  min-height: 13rem;
  width: 100%;
`

const Section = styled.section`
  h4 {
  }

  img {
    text-align: center;
  }

  p {
  }
`

export default class ConditionsService extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <Container>
          <H4 py="3rem">Overview</H4>
          <Hero>
            <div className="row">
              <img className="column" src={heroImg} alt="" />
              <p className="column">
                As an employee, you have the right to workplace terms and
                conditions that are fair and non-discriminatory. We’d like you
                to take some time to read the Conditions of Service.
                <Small mt="5rem">Last modified: November 13, 2017</Small>
              </p>
            </div>
          </Hero>

          <SplitGrid leftWidth={30} rightWidth={70}>
            <SplitGridLeftColumn></SplitGridLeftColumn>
            <SplitGridRightColumn>
              <Section>
                Placeholder
                {/* <H4>{section.heading}</H4>
            <img alt="" src={section.img} />
            <p>{section.p}</p> */}
              </Section>
            </SplitGridRightColumn>
          </SplitGrid>

          <Button
            color="blue"
            onClick={() => navigate('/preonboarding/introduce-yourself')}
          >
            Next Step >
          </Button>
          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
        </Container>
      </div>
    )
  }
}
