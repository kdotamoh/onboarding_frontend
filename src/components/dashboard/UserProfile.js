import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import DashboardNav from 'components/navigation/DashboardNav'
import { DashboardCard } from 'components/card'

import test from 'images/png/placeholder.png'
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

const _ProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      css={`
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        position: relative;

        img {
          border-radius: 50%;
          height: 60%;
        }
      `}
      onClick={() => setIsOpen(!isOpen)}
      className="tour-step-4"
      // onBlur={() => setIsOpen(false)}
      // tabIndex="-1"
    >
      {/* <span css={``}> */}
      <UserName>{user.first_name}sdfsd</UserName>
      {/* </span> */}
      <img src={test} alt="" />
      <div
        css={`
          background: white;
          width: 20rem;
          height: 20rem;
          transform: translateY(7rem);
          position: absolute;
          z-index: 500;
          right: 0;
          top: 0;
          display: flex;
          flex-direction: column;

          ${isOpen ? 'visibility: visible' : 'visibility: hidden'}
        `}
        tabIndex="-1"
      >
        <Link to="/dashboard/profile">Profile</Link>
        <span>Logout</span>
      </div>
    </div>
  )
}
_ProfileDropdown.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  })
}
export const ProfileDropdown = connect(state => ({
  token: state.token,
  user: state.user
}))(_ProfileDropdown)

const Wrapper = styled.div`
  ${space}

  height: 300px;
  width: 250px;
  position: absolute;
  right: 0;
  /* display: flex; */
  /* transform: translateY(10rem); */
`

const Avatar = styled.img`
  border-radius: 50%;
  /* width: 100%; */
  position: absolute;
  right: 0;
`

class UserProfile extends Component {
  render() {
    const { user } = this.props
    return (
      <>
        <DashboardNav />
        <SplitGrid leftWidth={20} rightWidth={80}>
          <SplitGridLeftColumn background={COLORS.LIGHT_GREY}>
            <Wrapper pt="5rem">
              <Avatar src={test} />
            </Wrapper>
          </SplitGridLeftColumn>
          <SplitGridRightColumn p="5rem" background={COLORS.LIGHT_GREY}>
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

            <DashboardCard height="unset" py="3rem" px="2rem" textAlign="left">
              <span>Job Title: {user.job_title}</span>
              <span>Division: {user.division}</span>
              <span>Department: {user.department}</span>
              <span>Location: {user.location}</span>
              <span>Line Manager: xxxxxxxxxx</span>
            </DashboardCard>
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
UserProfile.propTypes = {
  user: PropTypes.object
}
export default connect(state => ({
  token: state.token,
  user: state.user
}))(UserProfile)
