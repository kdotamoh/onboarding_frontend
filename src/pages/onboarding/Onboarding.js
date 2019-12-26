import React, { Component } from 'react'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  FullPageGrid,
  GridMain
} from 'views/layout'
import { COLORS } from '../../constants'
import Navigation, { SideNav } from 'components/navigation'

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <FullPageGrid>
          <Navigation />
          <GridMain>
            <SplitGrid leftWidth={30} rightWidth={70}>
              <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
                <SideNav />
              </SplitGridLeftColumn>
              <SplitGridRightColumn background={COLORS.WHITE} />
            </SplitGrid>
          </GridMain>
        </FullPageGrid>
      </div>
    )
  }
}
