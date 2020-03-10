import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
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

class Sales extends Component {
  state = {
    visible: false,
    rating: 5,
    getFeedback: false,
    feedBack: ''
  }

  handleRating = async rating => {
    try {
      let res = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_BASE}/feedbacks/`,
        headers: {
          Authorization: `JWT ${this.props.token}`
        }
      })
      axios({
        method: 'put',
        headers: {
          Authorization: `JWT ${this.props.token}`
        },
        data: {
          onboarding_rating: Number(rating)
        },
        url: `${process.env.REACT_APP_API_BASE}/feedbacks/${res.data[0].id}/`
      })
      navigate('/onboarding/end')
    } catch (err) {
      console.error(err)
      this.setState({ errorMessage: 'Something went wrong. Please try again.' })
    }
    this.setState({ rating })
    // navigate('/onboarding/end')
  }

  render() {
    const { visible } = this.state

    let { title } = this.props.page ? this.props.page : {}
    let { header } = this.props.page ? this.props.page : {}
    let { content } = this.props.page ? this.props.page : {}
    // let { pdf_file } = this.props.page ? this.props.page : {}
    return (
      <>
        <PageStyle>
          <h3>{title ? title : null}</h3>
          <h4>{header ? header : null}</h4>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
Sales.propTypes = {
  token: PropTypes.string,
  page: PropTypes.object
}

export default connect(state => ({
  token: state.token
}))(Sales)
