import React, { Component } from 'react'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import Navigation from 'components/navigation'

export default class UserProfile extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SplitGrid leftWidth={30} rightWidth={70}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            Avatar goes here
          </SplitGridLeftColumn>
          <SplitGridRightColumn background={COLORS.LIGHT_GREY}>
            Profile info
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}