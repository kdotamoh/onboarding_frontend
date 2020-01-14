import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'

import bgImg from 'images/onboarding/group-1.svg'
import PageStyle from '../PageStyle'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class LearningDevelopment extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>Learning &amp; Development</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint porro nulla officiis, hic aut quam eius, earum eos illum quas,
            natus ab repellendus assumenda quidem consequatur autem provident
            iste.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
            ullam culpa. Aperiam eius repellat alias, placeat illum nemo culpa
            dicta dolor ex saepe cumque corrupti dolorem corporis fugit iste.
          </p>
          <Link to="../hr-service">
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
