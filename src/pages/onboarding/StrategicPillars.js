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

export default class StrategicPillars extends Component {
  render() {
    return (
      <div>
        <div style={{ zIndex: 10000, position: 'relative' }}>
          <H3>Strategic Pillars &amp; Priorities</H3>
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
