import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, UL, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'
// import heroBg from 'images/bg_yellow_l.svg'
import brand from 'images/carousel/brand.png'
import leadership from 'images/carousel/leadership.png'
import trust from 'images/carousel/trust.png'
import global from 'images/carousel/global.png'
import reward from 'images/carousel/reward.png'

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

const CarouselSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;

  img {
    width: 7rem;
    min-height: auto;
    margin-bottom: 5rem;
  }

  h5 {
    font-family: MTNBrighterSans-Bold;
  }

  span {
    text-align: center;
  }
`

// const CustomLeftArrow = ({ previous }) => {
//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <button className="fal fa-chevron-left" onClick={previous}>
//         Left
//       </button>
//     </div>
//   )
// }

// const CustomRightArrow = ({ next }) => {
//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <button className="fal fa-chevron-right" onClick={next}>
//         Right
//       </button>
//     </div>
//   )
// }

export default class CompanyOverview extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    }

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
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Vision
                </H4>
                <p>
                  To lead the delivery of a bold, new, Digital world to our
                  customers.
                </p>
              </div>
              <div className="column">
                <img src={mission} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Mission
                </H4>
                <p>To make our customers’ lives a whole lot brighter.</p>
              </div>
              <div className="column">
                <img src={values} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
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
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
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
          <H4 color={COLORS.DARKER_GREYISH_BROWN} py="2rem">
            Our Employee Value Proposition
          </H4>
          <p>We can make your life better.</p>
        </Container>

        <div style={{ width: '75%', margin: '0 auto', marginBottom: '10rem' }}>
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            renderDotsOutside={true}
          >
            <CarouselSlide>
              <img src={brand} alt="" />
              <h5>Brand Strength</h5>
              <span>
                The strength of the MTN Brand; High Performing Culture;
                Contribute to making a difference; 21 days of Y’ello Care;
                Challenging &amp; meaningful work.
              </span>
            </CarouselSlide>
            <CarouselSlide>
              <img src={leadership} alt="" />
              <h5>Leadership Brand</h5>
              <span>
                Bold and inspiring Leadership; Innovation; People, Products
                &amp; Process Leadership, Aligned leadership; Work with people
                with exceptional skills.
              </span>
            </CarouselSlide>
            <CarouselSlide>
              <img src={trust} alt="" />
              <h5>Investing in our Trust</h5>
              <span>
                Unlocking potential; Blended Learning Opportunities; Challenging
                Work, Job Environment, Rotations, Mentor Access &amp; Global
                Assignments; Access to tools &amp; technologies that allow for
                agile, flexible &amp; creative outcomes; Talent &amp; Career
                Management.
              </span>
            </CarouselSlide>
            <CarouselSlide>
              <img src={reward} alt="" />
              <h5>Total Reward &amp; Recognition</h5>
              <span>
                Designed to meet every MTners motivation and aspirations; Labour
                market relevant Cash &amp; Non-cash benefits, Long and short
                term reward schemes, Life style and wellness schemes to manage
                life commitments, Recognition on the go &amp; MTN Shine.
              </span>
            </CarouselSlide>
            <CarouselSlide>
              <img src={global} alt="" />
              <h5>Globally Diverse Culture</h5>
              <span>
                Celebrating our diverse communities &amp; workforce; Each
                employee has a place and a voice.
              </span>
            </CarouselSlide>
          </Carousel>
        </div>

        <Container>
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
          <BgImg src={bgImg} />
        </Container>
      </div>
    )
  }
}
