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

    return (
      <div>
        <SmallNav />
        <StepNav />
        <Container>
          <H3 py="3rem">Your First Three Days</H3>
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

          <Wrapper width="60%">
            <Section>
              <h2>Your First Day</h2>
              <strong>Venue:</strong> MTN House, #6 Independence Avenue, West
              Ridge, Accra <br />
              <strong>Digital Address:</strong> GA-052-4025 <br />
              <strong>Time: </strong> Do plan to arrive at MTN House by 8:00am
              on your first day. <br />
              <strong>Parking:</strong> In order to assist you with parking on
              your first day, please present your ID to the security personnel
              at the main entrance.
            </Section>

            <Section>
              <h2>At the Reception</h2>
              <p>
                Present your ID to the receptionist. Your HR Business Partner
                will meet you and usher you to the Induction Centre. To ensure
                your safety and security, please cooperate with the security
                personnel, as you will be taken through some security protocols.
              </p>
            </Section>

            <Section>
              <h2>At the Induction Centre</h2>
              <p>
                We’d like you to find your way around the office as quickly as
                possible, so please expect an office facility tour on your first
                day.
              </p>
              <p>
                To activate your access to the office, your biometric details
                (fingerprints), will be taken within your first two days.
              </p>
              <p>
                It is important for you to understand what is required from you
                as far as employee conduct is concerned. Kindly expect to be
                taken through the following, among others, on your first day:
              </p>
              <ul>
                <li>Employee Conduct Pledge</li>
                <li>Confidentiality and Non-Disclosure Agreement</li>
                <li>Employee Conflict of Interest Process</li>
                <li>Compliance Policy</li>
                <li>Anti Bribery &amp; Corruption Policy</li>
                <li>Whistle Blowing Policy</li>
                <li>Gift, Hospitality &amp; Entertainment Policy</li>
                <li>Privacy Policy</li>
                <li>Insider Trading Policy</li>
              </ul>
              <p>
                We’d like you to acquaint yourself with our systems as quickly
                as possible, so please expect a hands-on system induction
                session on your second day. Customer Experience is at the heart
                of our business. We’d love for you to meet and interact with our
                customers as part of our Frontline Immersion programme for
                employees. Please expect to pay a visit to any of our service
                centres within your first week. Your feedback will go a long way
                to help us improve on our services.
              </p>
              <p>
                Your HR Business Partner will hand over the following to you
                within your first three days at work:
              </p>
              <ul>
                <li>Employee ID Card</li>
                <li>Employee SIM Card</li>
                <li>Medical Insurance Card</li>
              </ul>
            </Section>
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
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
}))(FirstDays)
