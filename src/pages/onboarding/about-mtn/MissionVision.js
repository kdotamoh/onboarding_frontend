import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PageStyle from '../PageStyle'

import bgImg from 'images/onboarding/bg_bottomright.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class MissionVision extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>Mission &amp; Vision</h3>
          <span>Mission</span>
          <h4>To Lead The Delivery Of A Bold, New World To Our Customers</h4>

          <span>Vision</span>
          <h4>To Make Our Customers' Lives A Whole Lot Brighter</h4>

          <Link to="../how-we-are-organised">
            <Button mt="15rem" textColor="black">
              Next >
            </Button>
          </Link>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
      </>
    )
  }
}
