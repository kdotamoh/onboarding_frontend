import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { Card } from 'components/card'
import { SmallNav } from 'components/navigation'
import { Button, H3, Container } from 'components/styled'

import { COLORS } from '../../constants'
import bgImg from 'images/bg_l_bottomright.svg'

const ContainerWithBackground = styled(Container)`
  justify-content: center;
  background: ${COLORS.PALE_MARIGOLD};
`

const BgImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Header = styled(H3)`
  color: ${COLORS.TWILIGHT_BLUE};
`

export default class Info extends Component {
  render() {
    return (
      <div>
        <SmallNav />
        <ContainerWithBackground>
          <Header>Where &amp; When</Header>
          <Card mb="3rem"></Card>
          <Button
            onClick={() => navigate('/preonboarding/company-overview')}
            color="blue"
            fontSize={1.6}
            p="4rem"
          >
            Next Step >
          </Button>
          <BgImg src={bgImg} />
        </ContainerWithBackground>
      </div>
    )
  }
}
