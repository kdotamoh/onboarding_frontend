import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { space } from 'styled-system'
import axios from 'axios'
import moment from 'moment'

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
  margin-left: auto;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* transform: translateY(10rem); */
`

const Layout = styled.div`
  display: flex;
  width: 100%;

  .events__menu {
    position: relative;
    /* min-height: 100vh; */
    width: 20%;
    /* height: 100%; */
    background-color: ${COLORS.LIGHT_GREY};

    @media (max-width: 768px) {
      width: 100%;
      min-height: 10rem;
      height: 100%;
    }
  }

  .events__main {
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
Loading.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node
}

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
    let { loading, events: unsortedEvents } = this.state
    const sortDates = (a, b) =>
      moment(b.start_date).format('YYYYMMDD') -
      moment(a.start_date).format('YYYYMMDD')
    const events = unsortedEvents.sort(sortDates)

    return (
      <>
        <DashboardNav>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </DashboardNav>
        <Layout>
          <div className="events__menu">
            <Wrapper pt="5rem">
              <SideNav>
                <OnboardingLink to="./">Upcoming</OnboardingLink>
                <OnboardingLink to="./#">Past</OnboardingLink>
              </SideNav>
            </Wrapper>
          </div>

          <div
            className="events__main"
            p="5rem"
            style={{ background: COLORS.LIGHT_GREY }}
          >
            <Loading loading={loading}>
              <div
                css={`
                  display: flex;
                  flex-wrap: wrap;
                `}
              >
                {events.length ? (
                  events.map(event => (
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
                              {moment(event.start_date)
                                .format('MMM')
                                .toUpperCase()}
                            </span>
                            <span className="day">
                              {moment(event.start_date).format('DD')}
                            </span>
                          </div>
                        </div>

                        <div className="card-info__right">
                          <div className="card-info__details">
                            <h5>{event.title}</h5>
                            <span>
                              {moment(event.start_date).format('MMM DD YYYY')} |{' '}
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
              </div>
            </Loading>

            {/* <PastEvents path="/dashboard/events/past" /> */}
          </div>
        </Layout>
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
