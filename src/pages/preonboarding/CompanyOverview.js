import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'

import { SmallNav, StepNav } from 'components/navigation'
import { H4, H3, Container, Img, Button } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'
// import heroBg from 'images/bg_yellow_l.svg'
import brand from 'images/carousel/brand.png'
import leadership from 'images/carousel/leadership.png'
import trust from 'images/carousel/trust.png'
import global from 'images/carousel/global.png'
import reward from 'images/carousel/reward.png'

import vision_img from 'images/vision_icon.svg'
import mission_img from 'images/mission_icon.svg'
import values_img from 'images/values_icon.svg'
import vital_img from 'images/vital_icon.svg'
import valuesPdf from 'assets/values.pdf'
import behavioursPdf from 'assets/behaviours.pdf'

import preonboarding from 'assets/preonboarding.mp4'

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

const HeroList = styled.div`
  font-size: 1.2rem;
  text-align: center;
  ul {
    li {
      list-style: none;
      text-decoration: none;
    }
  }
`

const InfoBox = styled.div`
  background: ${COLORS.PALE_MARIGOLD};
  /* width: 90%; */
  padding: 5rem 15rem;
  z-index: 500;

  h4 {
    font-size: 2rem;
    font-family: MTNBrighterSans-Bold;
  }

  ul {
    li {
      margin-left: 2rem;
    }
  }
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

class CompanyOverview extends Component {
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

    const { mission } = this.props.pageContent ? this.props.pageContent : {}
    const { vision } = this.props.pageContent ? this.props.pageContent : {}
    const { values } = this.props.pageContent ? this.props.pageContent : {}
    const { vital_behaviours } = this.props.pageContent
      ? this.props.pageContent
      : {}
    const { data_protection_principles } = this.props.pageContent
      ? this.props.pageContent
      : {}

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">Company Overview</H3>
          <video controls autoPlay>
            <source src={preonboarding} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div style={{ marginTop: '10rem' }} />
          <BigHero>
            <div className="row">
              <div className="column">
                <img src={vision_img} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Vision
                </H4>
                <p>{vision}</p>
              </div>
              <div className="column">
                <img src={mission_img} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Mission
                </H4>
                <p>{mission}</p>
              </div>
              <div className="column">
                <img src={values_img} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Values
                </H4>
                <HeroList dangerouslySetInnerHTML={{ __html: values }} />
                <a target="_blank" rel="noopener noreferrer" href={valuesPdf}>
                  See full values dictionary
                </a>
              </div>
              <div className="column">
                <img src={vital_img} alt="" />
                <H4 color={COLORS.DARKER_GREYISH_BROWN} mt="4rem">
                  Vital
                </H4>
                <HeroList
                  dangerouslySetInnerHTML={{ __html: vital_behaviours }}
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={behavioursPdf}
                >
                  See full vital behaviours dictionary
                </a>
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
          <InfoBox
            dangerouslySetInnerHTML={{ __html: data_protection_principles }}
          />
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
CompanyOverview.propTypes = {
  pageContent: PropTypes.object
}

export default connect(state => ({
  pageContent: state.pages.preonboardingPages.overview
}))(CompanyOverview)
