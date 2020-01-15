import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'

import bgImg from 'images/onboarding/bg_bottomright.svg'
import PageStyle from '../PageStyle'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class Overview extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>HR Services</h3>
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
          <Link to="../marketing">
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
