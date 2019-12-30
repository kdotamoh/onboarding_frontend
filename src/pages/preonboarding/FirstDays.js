import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { SmallNav } from 'components/navigation'
import Modal from 'components/modal'
import { H4, Container, Img, Button } from 'components/styled'
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
    visible: true,
    rating: 5,
    getFeedback: false,
    feedBack: ''
  }

  handleRating = rating => {
    this.setState({ rating, getFeedback: rating < 4 ? true : false })
    
  }

  handleChange = (event) => {
    let { name, value} = event.target;
    this.setState({ [name]: value} )
  }

  render() {
    const { visible } = this.state

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
                  <Submit onClick={() => navigate('/preonboarding/end')}>Submit feedback</Submit>
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
