import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'
import welcome from 'assets/welcome.mp4'
import induction from 'assets/induction.mp4'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class CEOWelcome extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>CEO Welcome</h3>
          <video controls>
            <source src={welcome} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div style={{ marginTop: '4rem' }} />
          <video controls>
            <source src={induction} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <Link to="../mission-and-vision">
            <Button mt="15rem" textColor="black">
              Next >
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
