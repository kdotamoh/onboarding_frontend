import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import { SideNav } from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import { DashboardCard } from 'components/card'
import OnboardingLink from 'pages/onboarding/OnboardingLink'

import noTask from 'images/no_task.svg'

class Tasks extends Component {
  render() {
    return (
      <>
        {/* <Navigation /> */}
        <DashboardNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav>
              <OnboardingLink to="/dashboard/tasks">New</OnboardingLink>
              <OnboardingLink to="/dashboard/tasks/past">Past</OnboardingLink>
            </SideNav>
          </SplitGridLeftColumn>
          <SplitGridRightColumn p="5rem" background={COLORS.LIGHT_GREY}>
            tasks
            <DashboardCard px="3rem" py="4rem">
              <img src={noTask} alt="" />
              <p>
                <strong>You don't have any tasks yet</strong>
              </p>
            </DashboardCard>
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}

export default connect(state => ({
  token: state.token,
  tasks: state.user.tasks
}))(Tasks)
