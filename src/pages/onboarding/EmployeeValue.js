import React, { Component } from 'react'
import styled from 'styled-components'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { H3, Button, Img } from 'components/styled'
import { COLORS } from '../../constants'
import { SideNav, SmallNav } from 'components/navigation'

import bgImg from 'images/onboarding/group-1.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class EmployeeValue extends Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <SmallNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav />
          </SplitGridLeftColumn>
          <SplitGridRightColumn px="10rem" py="5rem" background={COLORS.WHITE}>
            <u>{'<'} Back</u>
            <div style={{ zIndex: 10000, position: 'relative' }}>
              <H3>Employee Value Proposition</H3>
              Video
              <Button color="black">Next ></Button>
            </div>
            <div>
              <BgImg src={bgImg} />
            </div>
          </SplitGridRightColumn>
        </SplitGrid>
      </div>
    )
  }
}
