import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space } from 'styled-system'
import axios from 'axios'
import moment from 'moment'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../../constants'
import { SideNav } from 'components/navigation'
import DashboardNav from 'components/navigation/DashboardNav'
import OnboardingLink from 'pages/onboarding/OnboardingLink'
import { DashboardCard, CardInfo } from 'components/card'
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

const NoEvents = () => (
  <DashboardCard px="3rem" py="4rem" style={{ textAlign: 'center' }}>
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

const Loading = props => (
  <div>{props.loading ? <p>Loading...</p> : <div>{props.children}</div>}</div>
)

class Events extends Component {
  state = {
    loading: true,
    events: []
  }

  async componentDidMount() {
    let res = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/events/`,
      headers: {
        Authorization: `JWT ${this.props.token}`
      }
    })

    let { data: events } = res
    this.setState({ events, loading: false })
  }

  render() {
    let { loading } = this.state
    return (
      <>
        <DashboardNav>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </DashboardNav>
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <Wrapper pt="5rem">
              <SideNav>
                <OnboardingLink to="./">Upcoming</OnboardingLink>
                <OnboardingLink to="./">Past</OnboardingLink>
              </SideNav>
            </Wrapper>
          </SplitGridLeftColumn>

          <SplitGridRightColumn p="5rem" background={COLORS.LIGHT_GREY}>
            <div
              css={`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              <Loading loading={loading}>
                {this.state.events.length ? (
                  this.state.events.map(event => (
                    <DashboardCard
                      mx="1rem"
                      mb="2rem"
                      height="unset"
                      key={event.id}
                    >
                      {/* {event.picture && <img src={event.picture} />} */}
                      {event.picture && (
                        <img
                          css={`
                            height: 20rem;
                            width: 100%;
                            object-fit: cover;
                            margin-bottom: 0;
                          `}
                          src={event.picture}
                          alt=""
                        />
                      )}
                      <CardInfo>
                        <div className="card-info__left">
                          <div className="card-info__image card-info__circle">
                            <span className="month">
                              {moment(event.startDate)
                                .format('MMM')
                                .toUpperCase()}
                            </span>
                            <span className="day">
                              {moment(event.startDate).format('DD')}
                            </span>
                          </div>
                        </div>

                        <div className="card-info__right">
                          <div className="card-info__details">
                            <h5>{event.title}</h5>
                            <span>
                              {moment(event.startDate).format('MMM DD YYYY')} |{' '}
                              {moment(event.time, 'HH:mm:ss').format('hh:mm A')}
                            </span>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </CardInfo>
                      {event.description && (
                        <div
                          css={`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                            border-top: 1px solid #eeeeee;
                            font-size: 1.2rem;
                            margin: 0 2rem;
                          `}
                        >
                          <p
                            css={`
                              padding: 2rem 1rem;
                              width: 100%;
                              text-align: center;
                            `}
                          >
                            {event.description}
                          </p>
                        </div>
                      )}
                    </DashboardCard>
                  ))
                ) : (
                  <NoEvents path="/" />
                )}
              </Loading>
            </div>

            {/* <PastEvents path="/dashboard/events/past" /> */}
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
Events.propTypes = {
  token: PropTypes.string
}

export default connect(state => ({
  token: state.token
}))(Events)
