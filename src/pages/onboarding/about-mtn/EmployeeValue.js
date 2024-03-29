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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
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

const Video = styled.video`
  width: 65rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

class EmployeeValue extends Component {
  render() {
    let { title } = this.props.page ? this.props.page : {}
    let { header } = this.props.page ? this.props.page : {}
    let { employeeValues } = this.props ? this.props : []
    let { content } = this.props.page ? this.props.page : {}
    let { video_file_1 } = this.props.page ? this.props.page : {}
    let { video_file_2 } = this.props.page ? this.props.page : {}
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
          </Values>

          {video_file_1 && (
            <Video controls>
              <source src={video_file_1} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </Video>
          )}
          <div style={{ marginTop: '4rem' }} />
          {video_file_2 && (
            <Video controls>
              <source src={video_file_2} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </Video>
          )}

          <div dangerouslySetInnerHTML={{ __html: content }}></div>

          <Link to="../strategic-pillars-and-priorities">
            <Button mt="15rem" textColor="black">
              Next &gt;
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
