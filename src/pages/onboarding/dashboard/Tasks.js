import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space } from 'styled-system'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { Button } from 'components/styled'
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

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`

const SingleTask = styled.div`
  ${space}

  display: flex;
  flex-direction: column;

  background-color: #fff;
  padding: 1.5rem 2rem;
`

class Tasks extends Component {
  state = {
    tasks: [],
    status: 'loading'
  }
  async componentDidMount() {
    const url = `${process.env.REACT_APP_API_BASE}/tasks/`

    let { token } = this.props

    let { data } = await axios({
      method: 'get',
      url,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    this.setState({ tasks: data, status: 'loaded' })
    if (data.length === 0) {
      this.setState({ status: 'noTasks' })
    }
  }
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
            {this.state.status === 'loading' && <div>Loading...</div>}
            {this.state.status === 'loaded' && (
              <TaskList>
                {this.state.tasks.length &&
                  this.state.tasks.map(task => (
                    <SingleTask key={task.id} mb="2rem">
                      <h3 dangerouslySetInnerHTML={{ __html: task.title }}></h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: task.description }}
                      ></p>
                      <a
                        href={task.button_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // dangerouslySetInnerHTML={{ __html: task.button_text }}
                      >
                        <Button
                          dangerouslySetInnerHTML={{ __html: task.button_text }}
                        ></Button>
                      </a>
                    </SingleTask>
                  ))}
              </TaskList>
            )}
            {this.state.status === 'noTasks' && (
              <DashboardCard
                px="3rem"
                py="4rem"
                style={{ textAlign: 'center' }}
              >
                <img src={noTask} alt="" />
                <p>
                  <strong>You don't have any tasks yet</strong>
                </p>
              </DashboardCard>
            )}
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
Tasks.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token,
  tasks: state.user.tasks
}))(Tasks)
