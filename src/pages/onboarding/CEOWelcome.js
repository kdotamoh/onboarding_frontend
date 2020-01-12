import React, { Component } from 'react'
import styled from 'styled-components'

import { Button, Img } from 'components/styled'
import PageStyle from './PageStyle'

import bgImg from 'images/onboarding/group-1.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class CEOWelcome extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>CEO Welcome</h3>
          <div>Video</div> {/* // Todo: Embed video */}
          <Button mt="15rem" textColor="black">
            Next >
          </Button>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
      </>
    )
  }
}
