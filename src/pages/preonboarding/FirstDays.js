import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav } from 'components/navigation'
import Modal from 'components/modal'
import { H4, Container, Wrapper, Img, Button, Section } from 'components/styled'
import { Hero } from 'views/layout'
import { COLORS } from '../../constants'

import bgImg from 'images/bg_l_bottomright.svg'
import heroImg from 'images/first_days_hero.svg'

import verypoor from 'images/emoji/002-angry.svg'
import poor from 'images/emoji/017-sad.svg'
import satisfactory from 'images/emoji/013-meh.svg'
import good from 'images/emoji/022-smile.svg'
import verygood from 'images/emoji/010-happy.svg'

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

const Feedback = styled.textarea`
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  resize: none;
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

const Actions = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`

const ChangeRating = styled.span`
  font-size: 90%;
  margin-top: 2rem;
  cursor: pointer;
`

const Submit = styled.span`
  font-size: 90%;
  margin-top: 2rem;
  cursor: pointer;
  color: ${COLORS.TWILIGHT_BLUE};
`

export default class FirstDays extends Component {
  state = {
    visible: false,
    rating: 5,
    getFeedback: false,
    feedBack: ''
  }

  handleRating = rating => {
    this.setState({ rating, getFeedback: rating < 4 ? true : false })

    if (rating > 3) navigate('/preonboarding/end')
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <SmallNav />
        <Container>
          <H4 py="3rem">Your First Three Days</H4>
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

          <Wrapper>
            <Section>
              <h2>Your First Day</h2>
              Venue: MTN House, #6 Independence Avenue, West Ridge, Accra
              Digital Address: GA-052-4025 Time: Do plan to arrive at MTN House
              by 8:00am on your first day. Parking: In order to assist you with
              parking on your first day, please present your ID to the security
              personnel at the main entrance.
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
            {this.state.getFeedback ? (
              <div className="column">
                <ModalHeading>
                  Please tell us what we could improve on
                </ModalHeading>
                <Feedback onChange={this.handleChange}></Feedback>
                <Actions>
                  <ChangeRating
                    onClick={() => this.setState({ getFeedback: false })}
                  >
                    Change rating
                  </ChangeRating>
                  <Submit onClick={() => navigate('/preonboarding/end')}>
                    Submit feedback
                  </Submit>
                </Actions>
              </div>
            ) : (
              <React.Fragment>
                <ModalHeading>
                  Please rate your onboarding experience?
                </ModalHeading>
                <div className="row">
                  <div className="column">
                    <Emoji
                      onClick={() => this.handleRating(1)}
                      src={verypoor}
                    />
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
                    <Emoji
                      onClick={() => this.handleRating(5)}
                      src={verygood}
                    />
                    <Caption>Very Good</Caption>
                  </div>
                </div>
              </React.Fragment>
            )}
          </Modal>
        </Container>
      </div>
    )
  }
}
