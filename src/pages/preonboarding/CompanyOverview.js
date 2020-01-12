import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, UL, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'
// import heroBg from 'images/bg_yellow_l.svg'

import vision from 'images/vision_icon.svg'
import mission from 'images/mission_icon.svg'
import values from 'images/values_icon.svg'
import vital from 'images/vital_icon.svg'

import { COLORS } from '../../constants'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
`

const BigHero = styled(Hero)`
  /* // Todo: Clean up this mess */
  span,
  p,
  a {
    font-size: 1.2rem;
    text-align: center;
  }

  div {
    width: 90%;
    transform: unset;
    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .column {
    align-items: center;
    p {
      width: 70%;
    }

    a {
      color: rgba(0, 0, 0, 0.65);
      text-decoration: underline;
      font-size: 1rem;

      &:hover {
        color: ${COLORS.TWILIGHT_BLUE};
      }
    }
  }
`

const InfoBox = styled.div`
  background: ${COLORS.PALE_MARIGOLD};
  /* width: 90%; */
  padding: 5rem 15rem;
  z-index: 500;
`

export default class CompanyOverview extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">Overview</H3>
          <BigHero>
            <div className="row">
              <div className="column">
                <img src={vision} alt="" />
                <H4 color="black" mt="4rem">
                  Vision
                </H4>
                <p>
                  To lead the delivery of a bold, new, Digital world to our
                  customers.
                </p>
              </div>
              <div className="column">
                <img src={mission} alt="" />
                <H4 color="black" mt="4rem">
                  Mission
                </H4>
                <p>To make our customers’ lives a whole lot brighter.</p>
              </div>
              <div className="column">
                <img src={values} alt="" />
                <H4 color="black" mt="4rem">
                  Values
                </H4>
                <span>Leadership</span>
                <span>Integrity</span>
                <span>Relationship</span>
                <span>Innovation</span>
                <span>Can-do</span>
                <a href="#/">See full values dictionary</a>
              </div>
              <div className="column">
                <img src={vital} alt="" />
                <H4 color="black" mt="4rem">
                  Vital
                </H4>
                <span>Active Collaboration</span>
                <span>Complete Accountability</span>
                <span>Complete Candor</span>
                <span>Get-It-Done</span>
                <a href="#/">See full vital behaviours dictionary</a>
              </div>
            </div>
          </BigHero>
          <H4 py="2rem">Our Employee Value Proposition</H4>
          <p>We can make your life better.</p>
          <InfoBox>
            <H4 color="black">Data Protection Principles</H4>
            <p>
              Protecting individual data is paramount to us in MTN. Our Data
              protection principles are meant to protect you, your colleagues
              and the organization. We ensure all data available to us is:
            </p>
            <UL>
              <li>Used fairly, lawfully and transparently</li>
              <li>Used for specified, explicit purpose</li>
              <li>
                Used in a way that is adequate, relevant and limited to only
                what is necessary
              </li>
              <li>Accurate and, where necessary, kept up to date</li>
              <li>Kept for no longer than is necessary</li>
              <li>
                Handled in a way that ensures appropriate security, including
                protection against unlawful or unauthorized, access, loss,
                destruction or damage.
              </li>
            </UL>
          </InfoBox>
          <Button
            mt="5rem"
            mb="10rem"
            color="blue"
            onClick={() => navigate('/preonboarding/compliance')}
          >
            Next Step >
          </Button>
          {/* <BgImgContainer> */}
          <BgImg src={bgImg} />
          {/* </BgImgContainer> */}
        </Container>
      </div>
    )
  }
}
