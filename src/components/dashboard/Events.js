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
import { DashboardCard } from 'components/card'

import noTask from 'images/no_task.svg'

const NoEvents = () => (
  <DashboardCard px="3rem" py="4rem">
    <img src={noTask} alt="" />
    <p>
      <strong>You don't have any events yet</strong>
    </p>
  </DashboardCard>
)

// const PastEvents = () => (
//   <DashboardCard px="3rem" py="4rem">
//     <img src={noTask} alt="" />
//     <p>
//       <strong>You don't have any past events</strong>
//     </p>
//   </DashboardCard>
// )

export default class Events extends Component {
  render() {
    return (
      <>
        <DashboardNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav>
              <OnboardingLink to="./">Upcoming</OnboardingLink>
              <OnboardingLink to="past">Past</OnboardingLink>
            </SideNav>
          </SplitGridLeftColumn>

          <SplitGridRightColumn p="5rem" background={COLORS.LIGHT_GREY}>
            <NoEvents path="/" />
            {/* <PastEvents path="/dashboard/events/past" /> */}
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
