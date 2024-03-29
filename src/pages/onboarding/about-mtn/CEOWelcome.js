import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'
// import welcome from 'assets/welcome.mp4'
// import induction from 'assets/induction.mp4'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

const Video = styled.video`
  width: 65rem;

  @media (max-width: 768px) {
    width: 95%;
  }
`

export default class CEOWelcome extends Component {
  render() {
    let { title } = this.props.page ? this.props.page : {}
    let { header } = this.props.page ? this.props.page : {}
    let { content } = this.props.page ? this.props.page : {}
    let { video_file_1 } = this.props.page ? this.props.page : {}
    let { video_file_2 } = this.props.page ? this.props.page : {}
    return (
      <>
        <PageStyle>
          <h3>{title ? title : null}</h3>
          <h4>{header ? header : null}</h4>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
          <Link to="../company-overview">
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
CEOWelcome.propTypes = {
  page: PropTypes.object
}
