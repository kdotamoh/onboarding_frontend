import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space } from 'styled-system'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../../constants'
import { SideNav } from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import { DashboardCard } from 'components/card'
import OnboardingLink from 'pages/onboarding/OnboardingLink'
import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'

import noTask from 'images/no_task.svg'

export const Wrapper = styled.div`
  ${space}

  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
  /* transform: translateY(10rem); */
`

class Tasks extends Component {
  render() {
    return (
      <>
        {/* <Navigation /> */}
        <DashboardNav>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </DashboardNav>
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <Wrapper pt="5rem">
              <SideNav>
                <OnboardingLink to="/onboarding/user-tasks">New</OnboardingLink>
                <OnboardingLink to="/onboarding/user-tasks">
                  Past
                </OnboardingLink>
              </SideNav>
            </Wrapper>
          </SplitGridLeftColumn>
          <SplitGridRightColumn p="5rem" background={COLORS.LIGHT_GREY}>
            <DashboardCard px="3rem" py="4rem" style={{ textAlign: 'center' }}>
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
