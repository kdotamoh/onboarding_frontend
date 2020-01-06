import React, { Component } from 'react'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import Navigation, { SideNav } from 'components/navigation'

export default class Tasks extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SplitGrid leftWidth={30} rightWidth={70}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav />
          </SplitGridLeftColumn>
          <SplitGridRightColumn background={COLORS.LIGHT_GREY}>
            tasks
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
