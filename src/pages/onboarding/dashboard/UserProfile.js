import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link, navigate } from '@reach/router'
import { connect } from 'react-redux'

import { unsetToken } from 'store/auth'
import { unsetUser } from 'store/user'

import { COLORS } from '../../../constants'
import DashboardNav from 'components/navigation/DashboardNav'
import DashboardLink from 'pages/onboarding/dashboard/DashboardLink'
import { DashboardCard } from 'components/card'

// import test from 'images/png/placeholder.png'
import placeholder from 'images/user-profile/account.jpg'

import arrow from 'images/user-profile/down-arrow.svg'

const UserName = styled.span`
  font-size: 1.2rem;
  font-family: MTNBrighterSans-Bold;

  &:after {
    content: url(${arrow});
    margin-left: 5px;
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.7rem;
  }
`

const _ProfileDropdown = ({ user, unsetToken, unsetUser }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const logout = () => {
    unsetUser()
    unsetToken()
    navigate('/onboarding')
  }
  return (
    <div
      css={`
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        position: relative;
        margin-left: auto;

        img {
          border-radius: 50%;
          height: 4.5rem;
          /* width: auto; */

          @media (max-width: 768px) {
            height: 3rem;
            width: 3rem;
          }
        }
      `}
      onClick={() => setIsOpen(!isOpen)}
      className="tour-step-4"
      // onBlur={() => setIsOpen(false)}
      // tabIndex="-1"
    >
      {/* <span css={``}> */}
      <UserName>{user.first_name}</UserName>
      {/* </span> */}
      <img
        css={`
          object-fit: cover;
          height: 4.5rem;
          width: 4.5rem;
        `}
        src={user.avatar ? user.avatar : placeholder}
        alt=""
      />
      <div
        css={`
          background: white;
          width: 20rem;
          height: 10rem;
          transform: translateY(7rem);
          position: absolute;
          z-index: 500;
          right: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 2rem;

          ${isOpen ? 'visibility: visible' : 'visibility: hidden'}
        `}
        tabIndex="-1"
      >
        <Link
          css={`
            color: ${COLORS.DARKER_GREYISH_BROWN};
            text-decoration: none;
          `}
          to="../user-profile"
        >
          Profile
        </Link>
        <span onClick={() => logout()}>Logout</span>
      </div>
    </div>
  )
}
_ProfileDropdown.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    avatar: PropTypes.string
  }),
  unsetToken: PropTypes.func,
  unsetUser: PropTypes.func
}
const mapDispatch = { unsetToken, unsetUser }
export const ProfileDropdown = connect(
  state => ({
    token: state.token,
    user: state.user
  }),
  mapDispatch
)(_ProfileDropdown)

const Wrapper = styled.div`
  ${space}
  display: flex;
  height: 300px;
  width: 250px;
  margin-left: auto;

  @media (max-width: 768px) {
    height: 100%;
    min-height: fit-content;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* transform: translateY(10rem); */
`

const Layout = styled.div`
  display: flex;
  width: 100%;

  .profile__avatar {
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

  .profile__main {
    padding: 5rem 10rem;
    background-color: ${COLORS.LIGHT_GREY};
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

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 15rem;
  width: 15rem;
  margin-left: auto;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

class UserProfile extends Component {
  state = {
    line_manager_details: {}
  }

  async componentDidMount() {
    let { line_manager } = this.props.user
    let { data: line_manager_details } = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/line_managers/${
        line_manager ? line_manager.id : ''
      }/`,
      headers: {
        Authorization: `JWT ${this.props.token}`
      }
    })
    // console.log(hr_partner_details)
    this.setState({ line_manager_details })
  }
  render() {
    const { user } = this.props
    const {
      first_name: line_manager_first_name,
      last_name: line_manager_last_name
    } = this.state.line_manager_details

    return (
      <>
        <DashboardNav>
          <DashboardLink to="/onboarding/home">Home</DashboardLink>
          <DashboardLink to="/onboarding/events">Events</DashboardLink>
          <DashboardLink to="/onboarding/user-tasks">Tasks</DashboardLink>
        </DashboardNav>
        <Layout>
          <div className="profile__avatar" background={COLORS.LIGHT_GREY}>
            <Wrapper pt="5rem">
              <Avatar src={user.avatar ? user.avatar : placeholder} />
            </Wrapper>
          </div>
          <div
            className="profile__main"
            p="5rem"
            background={COLORS.LIGHT_GREY}
          >
            <DashboardCard
              height="unset"
              py="3rem"
              px="2rem"
              textAlign="left"
              mb="2rem"
            >
              <span>Surname: {user.last_name}</span>
              <span>Middle Name: {user.other_names}</span>
              <span>First Name: {user.first_name}</span>
              <span>Official Mobile No.: {user.phone_number}</span>
            </DashboardCard>

            <DashboardCard
              height="unset"
              py="3rem"
              px="2rem"
              mb="2rem"
              textAlign="left"
            >
              <span>
                Job Title: {user.job_title ? user.job_title.title : null}
              </span>
              <span>
                Division:{' '}
                {user.division.title ? user.division.title : 'Loading...'}
              </span>
              <span>
                Department:{' '}
                {user.department.title ? user.department.title : 'Loading'}
              </span>
              <span>
                Location: {user.location ? user.location.title : 'Loading'}
              </span>
              <span>
                Line Manager: {line_manager_first_name} {line_manager_last_name}
              </span>
            </DashboardCard>

            {/* <DashboardCard height="unset" py="3rem" px="2rem" textAlign="left">
              <span>Add signature</span>
              <canvas
                style={{
                  height: '20rem',
                  width: '20rem',
                  border: '1px solid black'
                }}
                ref={this.signatureRef}
              ></canvas>
            </DashboardCard> */}
          </div>
        </Layout>
      </>
    )
  }
}
UserProfile.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  divisions: PropTypes.array,
  departments: PropTypes.array
}

export default connect(state => ({
  token: state.token,
  user: state.user,
  departments: state.organisation.departments,
  divisions: state.organisation.divisions
}))(UserProfile)
