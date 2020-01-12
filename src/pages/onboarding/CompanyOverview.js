import React, { Component } from 'react'
import styled from 'styled-components'

import { H3, Button, Img } from 'components/styled'

import bgImg from 'images/onboarding/group-1.svg'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 5vw;
  right: 7.5vw;
  align-self: flex-end;
  z-index: 0;
`

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <div style={{ zIndex: 10000, position: 'relative' }}>
          <H3>Company Overview</H3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint porro nulla officiis, hic aut quam eius, earum eos illum quas,
            natus ab repellendus assumenda quidem consequatur autem provident
            iste.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            explicabo? Saepe, velit voluptate pariatur reiciendis molestiae
            incidunt earum amet aliquam doloribus? Odio quae, fugit asperiores
            quas molestiae voluptatibus laboriosam doloribus!
          </p>
          <Button textColor="black">Next ></Button>
        </div>
        <div>
          <BgImg src={bgImg} />
        </div>
      </div>
    )
  }
}
