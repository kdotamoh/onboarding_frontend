import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { DashboardCard } from 'components/card'
import { Button } from 'components/styled'
// import Navigation from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'

import noTask from 'images/no_task.svg'

import { COLORS } from '../../../constants'
import { Img, H1 } from 'components/styled'
import bgImg from 'images/bg_l_h_bottomright.svg'

const StepOne = styled.div.attrs({
  className: 'tour-step-1'
})``

const StepThree = styled(DashboardNav).attrs({
  className: 'tour-step-3'
})``

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  max-height: 80%;
`

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
  z-index: 1000;
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 7rem);

  .layout__section {
    width: 50%;
    display: flex;
    padding: 10rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .layout__section {
      padding: 3rem;
      width: 100%;
      /* height: 100%; */
      min-height: fit-content;
    }
  }
`

// TODO: This is a temp page to card the end of onboarding.
class End extends Component {
  state = {
    tasksLength: '',
    status: '',
    upcomingTasks: [],
    pastTasks: []
  }

  async componentDidMount() {
    localStorage.setItem('onboardingComplete', true)

    const url = `${process.env.REACT_APP_API_BASE}/tasks/`

    let { token } = this.props

    let { data } = await axios({
      method: 'get',
      url,
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    this.setState({ tasks: data, status: 'hasTasks' })

    let upcomingTasks = data.filter(task => task.completed === false)
    let pastTasks = data.filter(task => task.completed === true)

    this.setState({ upcomingTasks, pastTasks, tasksLength: data.length })

    if (data.length === 0) {
      this.setState({ status: 'noTasks' })
    }
  }
  render() {
    const {
      user: { first_name }
    } = this.props

    return (
      <React.Fragment>
        <StepThree>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </StepThree>
        <Layout>
          <div
            className="layout__section"
            style={{ background: COLORS.LIGHTER_MARIGOLD }}
          >
            {/* <CenterContent> */}
            <div>
              <StepOne
                css={`
                  position: relative;
                  z-index: 20;
                `}
              >
                <HeroH1>
                  Congrats on completing your onboarding, {first_name}
                </HeroH1>
                <p>Text here</p>
              </StepOne>
            </div>
            {/* </CenterContent> */}
          </div>
          <div
            className="layout__section"
            style={{ background: COLORS.PALE_MARIGOLD }}
          >
            {/* <CenterContent> */}
            <DashboardCard
              // px="3rem"
              py="4rem"
              // css={`
              //   transform: translateY(-10rem);
              // `}
            >
              <img src={noTask} alt="" />
              {this.state.status === 'noTasks' && (
                <p>
                  <strong>You don't have any tasks yet</strong>
                </p>
              )}
              {this.state.status === 'hasTasks' && (
                <>
                  <p style={{ marginTop: '2rem' }}>
                    <strong>You have ({this.state.tasksLength}) task</strong>
                  </p>
                  <Button
                    mt="1rem"
                    color="blue"
                    onClick={() => navigate('./user-tasks')}
                  >
                    Go to tasks &gt;
                  </Button>
                </>
              )}
            </DashboardCard>
            {/* </CenterContent> */}
            <BgImg src={bgImg} />
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}
End.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  }),
  token: PropTypes.string
}

export default connect(state => ({
  user: state.user,
  token: state.token
}))(End)
