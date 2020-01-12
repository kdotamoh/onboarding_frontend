import React, { Component } from 'react'
import styled from 'styled-components'

import { H3, Button, Img } from 'components/styled'

import bgImg from 'images/onboarding/group-1.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class MissionVision extends Component {
  render() {
    return (
      <div>
        <div style={{ zIndex: 10000, position: 'relative' }}>
          <H3>Mission &amp; Vision</H3>
          Video
          <Button textColor="black">Next ></Button>
        </div>
        <div>
          <BgImg src={bgImg} />
        </div>
      </div>
    )
  }
}
