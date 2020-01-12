import React, { Component } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from '@reach/router'

import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn
} from 'views/layout'
import { COLORS } from '../../constants'
import DashboardNav from 'components/navigation/DashboardNav'
import { DashboardCard } from 'components/card'

import test from 'images/png/placeholder.png'

export const ProfileDropdown = () => {
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
      <span
        css={`
          margin-right: 0.7rem;
          font-size: 1.2rem;
          font-family: MTNBrighterSans-Bold;
        `}
      >
        Edward v
      </span>
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

export default class UserProfile extends Component {
  render() {
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
              <span>Surname: Darko</span>
              <span>Middle Name: Kwame</span>
              <span>First Name: Edward</span>
              <span>Official Mobile No.: 0244 123 456</span>
            </DashboardCard>

            <DashboardCard height="unset" py="3rem" px="2rem" textAlign="left">
              <span>Job Title: xxxxxxxxxx</span>
              <span>Division: xxxxxxxxxx</span>
              <span>Department: xxxxxxxxxx</span>
              <span>Location: xxxxxxxxxx</span>
              <span>Line Manager: xxxxxxxxxx</span>
            </DashboardCard>
          </SplitGridRightColumn>
        </SplitGrid>
      </>
    )
  }
}
