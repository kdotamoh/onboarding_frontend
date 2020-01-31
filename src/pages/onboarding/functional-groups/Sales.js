import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { Button, Img } from 'components/styled'
import Modal from 'components/modal'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'

import verypoor from 'images/emoji/verypoor.svg'
import poor from 'images/emoji/poor.svg'
import satisfactory from 'images/emoji/satisfactory.svg'
import good from 'images/emoji/good.svg'
import verygood from 'images/emoji/verygood.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

const ModalHeading = styled.h3`
  margin-bottom: 2rem;
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

export default class Overview extends Component {
  state = {
    visible: false,
    rating: 5,
    getFeedback: false,
    feedBack: ''
  }

  handleRating = rating => {
    this.setState({ rating })
    navigate('/onboarding/end')
  }

  render() {
    const { visible } = this.state

    return (
      <>
        <PageStyle>
          <h3>Sales</h3>
          <h4>Text here</h4>
          <p>Text here</p>
          <Button
            mt="15rem"
            color="blue"
            onClick={() => this.setState({ visible: true })}
          >
            Finish >
          </Button>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
        <Modal visible={visible}>
          <>
            <ModalHeading>Please rate your onboarding experience?</ModalHeading>
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
          </>
        </Modal>
      </>
    )
  }
}
