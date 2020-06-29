import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space } from 'styled-system'

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
  margin-left: auto;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
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

const Layout = styled.div`
  display: flex;
  width: 100%;

  .tasks__menu {
    position: relative;
    min-height: 100vh;
    width: 20%;
    background-color: ${COLORS.LIGHT_GREY};

    @media (max-width: 768px) {
      width: 100%;
      min-height: 10rem;
    }
  }

  .tasks__main {
    padding: 5rem 10rem;
    background-color: #fff;
    width: 80%;
    min-height: 100vh;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      padding: 5rem 2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

class Tasks extends Component {
  state = {
    tasks: [],
    pastTasks: [],
    upcomingTasks: [],
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

    let upcomingTasks = data.filter(task => task.completed === false)
    let pastTasks = data.filter(task => task.completed === true)
    this.setState({ upcomingTasks, pastTasks })

    if (data.length === 0) {
      this.setState({ status: 'noTasks' })
    }
  }
  render() {
    // const PastTasks = ({ children }) => {
    //   return (
    //     <div>
    //       {this.state.status === 'loading' && <div>Loading...</div>}
    //       {this.state.status === 'loaded' && (
    //         <TaskList>
    //           {this.state.pastTasks.length &&
    //             this.state.pastTasks.map(task => (
    //               <SingleTask key={task.id} mb="2rem">
    //                 <h3 dangerouslySetInnerHTML={{ __html: task.title }}></h3>
    //                 <p
    //                   dangerouslySetInnerHTML={{
    //                     __html: task.description
    //                   }}
    //                 ></p>
    //                 <a
    //                   href={task.button_url}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   // dangerouslySetInnerHTML={{ __html: task.button_text }}
    //                 >
    //                   <Button
    //                     color="blue"
    //                     dangerouslySetInnerHTML={{
    //                       __html: task.button_text
    //                     }}
    //                   ></Button>
    //                 </a>
    //               </SingleTask>
    //             ))}
    //         </TaskList>
    //       )}
    //       {this.state.status === 'noTasks' && (
    //         <DashboardCard px="3rem" py="4rem" style={{ textAlign: 'center' }}>
    //           <img src={noTask} alt="" />
    //           <p>
    //             <strong>You don't have any tasks yet</strong>
    //           </p>
    //         </DashboardCard>
    //       )}
    //     </div>
    //   )
    // }

    // const UpcomingTasks = ({ children }) => {
    //   return (
    //     <div>
    //       {this.state.status === 'loading' && <div>Loading...</div>}
    //       {this.state.status === 'loaded' && (
    //         <TaskList>
    //           {this.state.upcomingTasks.length &&
    //             this.state.upcomingTasks.map(task => (
    //               <SingleTask key={task.id} mb="2rem">
    //                 <h3 dangerouslySetInnerHTML={{ __html: task.title }}></h3>
    //                 <p
    //                   dangerouslySetInnerHTML={{
    //                     __html: task.description
    //                   }}
    //                 ></p>
    //                 <a
    //                   href={task.button_url}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   // dangerouslySetInnerHTML={{ __html: task.button_text }}
    //                 >
    //                   <Button
    //                     color="blue"
    //                     dangerouslySetInnerHTML={{
    //                       __html: task.button_text
    //                     }}
    //                   ></Button>
    //                 </a>
    //               </SingleTask>
    //             ))}
    //         </TaskList>
    //       )}
    //       {this.state.status === 'noTasks' && (
    //         <DashboardCard px="3rem" py="4rem" style={{ textAlign: 'center' }}>
    //           <img src={noTask} alt="" />
    //           <p>
    //             <strong>You don't have any tasks yet</strong>
    //           </p>
    //         </DashboardCard>
    //       )}
    //     </div>
    //   )
    // }

    return (
      <>
        {/* <Navigation /> */}
        <DashboardNav>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </DashboardNav>
        <Layout>
          <div className="tasks__menu">
            <Wrapper pt="5rem">
              <SideNav>
                <OnboardingLink to="/onboarding/user-tasks">New</OnboardingLink>
                {/* <OnboardingLink to="/onboarding/user-tasks">
                  Past
                </OnboardingLink> */}
              </SideNav>
            </Wrapper>
          </div>
          <div
            className="tasks__main"
            style={{ background: COLORS.LIGHT_GREY }}
          >
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
                          color="blue"
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
          </div>
        </Layout>
      </>
    )
  }
}
Tasks.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
  // tasks: state.user.tasks
}))(Tasks)
