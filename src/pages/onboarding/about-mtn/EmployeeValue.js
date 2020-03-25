import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'

// import brand from 'images/carousel/brand.png'
// import leadership from 'images/carousel/leadership.png'
// import trust from 'images/carousel/trust.png'
// import global from 'images/carousel/global.png'
// import reward from 'images/carousel/reward.png'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`
const Values = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 70rem;
`
const Value = styled.div`
  border: 0.5px solid #d1d1d1;
  border-radius: 5px;
  background: white;
  padding: 2rem;
  margin: 1rem;
  text-align: center;

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
    font-size: 2rem;
    font-family: MTNBrighterSans-Regular;
  }

  span {
    text-align: center;
  }
`

class EmployeeValue extends Component {
  render() {
    let { title } = this.props.page ? this.props.page : {}
    let { header } = this.props.page ? this.props.page : {}
    let { employeeValues } = this.props ? this.props : []
    // let { content } = this.props.page ? this.props.page : {}
    return (
      <>
        <PageStyle>
          <h3>{title ? title : null}</h3>
          <h4>{header ? header : null}</h4>

          <Values>
            {employeeValues &&
              employeeValues.map(value => (
                <Value key={value.id}>
                  <img src={value.image} alt="" />
                  <h5>{value.title}</h5>
                  <span
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  ></span>
                </Value>
              ))}
            {/* <Value>
              <img src={brand} alt="" />
              <h5>Brand Strength</h5>
              <span>
                The strength of the MTN Brand; High Performing Culture;
                Contribute to making a difference; 21 days of Y’ello Care;
                Challenging &amp; meaningful work.
              </span>
            </Value>
            <Value>
              <img src={leadership} alt="" />
              <h5>Leadership Brand</h5>
              <span>
                Bold and inspiring Leadership; Innovation; People, Products
                &amp; Process Leadership, Aligned leadership; Work with people
                with exceptional skills.
              </span>
            </Value>
            <Value>
              <img src={trust} alt="" />
              <h5>Investing in our Trust</h5>
              <span>
                Unlocking potential; Blended Learning Opportunities; Challenging
                Work, Job Environment, Rotations, Mentor Access &amp; Global
                Assignments; Access to tools &amp; technologies that allow for
                agile, flexible &amp; creative outcomes; Talent &amp; Career
                Management.
              </span>
            </Value>
            <Value>
              <img src={reward} alt="" />
              <h5>Total Reward &amp; Recognition</h5>
              <span>
                Designed to meet every MTners motivation and aspirations; Labour
                market relevant Cash &amp; Non-cash benefits, Long and short
                term reward schemes, Life style and wellness schemes to manage
                life commitments, Recognition on the go &amp; MTN Shine.
              </span>
            </Value>
            <Value>
              <img src={global} alt="" />
              <h5>Globally Diverse Culture</h5>
              <span>
                Celebrating our diverse communities &amp; workforce; Each
                employee has a place and a voice.
              </span>
            </Value> */}
          </Values>

          <Link to="../strategic-pillars-and-priorities">
            <Button mt="15rem" textColor="black">
              Next >
            </Button>
          </Link>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
      </>
    )
  }
}
EmployeeValue.propTypes = {
  page: PropTypes.object,
  employeeValues: PropTypes.array
}
export default connect(state => ({
  employeeValues: state.pages.employeeValues
}))(EmployeeValue)
