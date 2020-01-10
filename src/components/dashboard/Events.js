import React, { Component } from 'react'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import { SideNav } from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import OnboardingLink from 'pages/onboarding/OnboardingLink'

export default class Events extends Component {
  render() {
    return (
      <>
        <DashboardNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav>
              <OnboardingLink to="/dashboard/events">Upcoming</OnboardingLink>
              <OnboardingLink to="/dashboard/events/past">Past</OnboardingLink>
            </SideNav>
          </SplitGridLeftColumn>
          <SplitGridRightColumn background={COLORS.LIGHT_GREY}>
            events
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
