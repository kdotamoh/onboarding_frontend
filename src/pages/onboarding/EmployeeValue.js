import React, { Component } from 'react'
import styled from 'styled-components'

import { Button, Img } from 'components/styled'

import bgImg from 'images/onboarding/group-1.svg'
import PageStyle from './PageStyle'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class EmployeeValue extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>Employee Value Proposition</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint porro nulla officiis
          </h4>
          <Button mt="15rem" textColor="black">
            Next >
          </Button>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
      </>
    )
  }
}
