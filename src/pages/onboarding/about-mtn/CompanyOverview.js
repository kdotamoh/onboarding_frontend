import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/group-1.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

const Video = styled.video`
  width: 65rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default class CompanyOverview extends Component {
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

          <Link to="../mission-and-vision">
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
CompanyOverview.propTypes = {
  page: PropTypes.object
}
