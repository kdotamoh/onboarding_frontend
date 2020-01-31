import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'
import codeofethics from 'assets/codeofethics.mp4'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class Tasks extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>Tasks</h3>
          <h4>Text here</h4>
          <p>Text here</p>
          <video
            controls
            css={`
              width: 65rem;
            `}
          >
            <source src={codeofethics} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <Link to="../../functional-groups/overview">
            <Button mt="15rem" color="blue">
              Functional Groups >
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
