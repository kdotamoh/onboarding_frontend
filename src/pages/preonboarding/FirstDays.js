import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { navigate } from '@reach/router'

import { SmallNav, StepNav } from 'components/navigation'
import Modal from 'components/modal'
import { H3, Container, Wrapper, Img, Button, Section } from 'components/styled'
import { Hero } from 'views/layout'

import bgImg from 'images/bg_l_bottomright.svg'
import heroImg from 'images/first_days_hero.svg'

import verypoor from 'images/emoji/verypoor.svg'
import poor from 'images/emoji/poor.svg'
import satisfactory from 'images/emoji/satisfactory.svg'
import good from 'images/emoji/good.svg'
import verygood from 'images/emoji/verygood.svg'

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

const Emoji = styled.img`
  max-height: 5rem;
  cursor: pointer;
`

const Caption = styled.span`
  font-size: 80%;
  margin-top: 1rem;
  cursor: pointer;
`

const ModalHeading = styled.h3`
  margin-bottom: 2rem;
`

const FirstDaysSection = styled(Section)`
  h2: {
    margin-top: 300px;
  }
`

class FirstDays extends Component {
  state = {
    visible: false,
    rating: 5,
    getFeedback: false,
    feedBack: '',
    errorMessage: ''
  }

  handleRating = async rating => {
    this.setState({ rating })
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_BASE}/feedbacks/`,
        data: {
          preonboarding_rating: Number(rating)
        },
        headers: {
          Authorization: `JWT ${this.props.token}`
        }
      })
      navigate('/preonboarding/end')
    } catch (err) {
      console.error(err)
      this.setState({ errorMessage: 'Something went wrong. Please try again.' })
    }
  }

  render() {
    const { visible } = this.state

    const { title } = this.props.pageContent ? this.props.pageContent : {}
    const { hero_text } = this.props.pageContent ? this.props.pageContent : {}
    const { content } = this.props.pageContent ? this.props.pageContent : {}

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem" dangerouslySetInnerHTML={{ __html: title }}></H3>
          <Hero>
            <div className="row">
              <p
                className="column"
                dangerouslySetInnerHTML={{ __html: hero_text }}
              ></p>
              <img className="column" src={heroImg} alt="" />
            </div>
          </Hero>

          <Wrapper width="60%">
            <FirstDaysSection
              dangerouslySetInnerHTML={{ __html: content }}
            ></FirstDaysSection>
          </Wrapper>

          <Button color="blue" onClick={() => this.setState({ visible: true })}>
            Finish >
          </Button>

          <BgImgContainer>
            <BgImg src={bgImg} />
          </BgImgContainer>
          <Modal visible={visible}>
            <React.Fragment>
              <ModalHeading>
                Please rate your onboarding experience?
              </ModalHeading>
              <div className="row">
                <div className="column">
                  <Emoji onClick={() => this.handleRating(1)} src={verypoor} />
                  <Caption>Very Poor</Caption>
                </div>
                <div className="column">
                  <Emoji onClick={() => this.handleRating(2)} src={poor} />
                  <Caption>Poor</Caption>
                </div>
                <div className="column">
                  <Emoji
                    onClick={() => this.handleRating(3)}
                    src={satisfactory}
                  />
                  <Caption>Satisfactory</Caption>
                </div>
                <div className="column">
                  <Emoji onClick={() => this.handleRating(4)} src={good} />
                  <Caption>Good</Caption>
                </div>
                <div className="column">
                  <Emoji onClick={() => this.handleRating(5)} src={verygood} />
                  <Caption>Very Good</Caption>
                </div>
              </div>

              {this.state.errorMessage && (
                <p style={{ marginTop: '3rem', color: 'red' }}>
                  {this.state.errorMessage}
                </p>
              )}
            </React.Fragment>
          </Modal>
        </Container>
      </div>
    )
  }
}
FirstDays.propTypes = {
  token: PropTypes.string,
  pageContent: PropTypes.object
}

export default connect(state => ({
  token: state.token,
  pageContent: state.pages.preonboardingPages.firstDays
}))(FirstDays)
