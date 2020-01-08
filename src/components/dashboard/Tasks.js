import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import Navigation, { SideNav } from 'components/navigation'
import { DashboardCard } from 'components/card'

import noTask from 'images/no_task.svg'

class Tasks extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SplitGrid leftWidth={30} rightWidth={70}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <SideNav />
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
