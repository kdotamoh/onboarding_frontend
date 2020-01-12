import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { COLORS } from '../../constants'
import { Img } from 'components/styled'
import {
  SplitGrid,
  SplitGridLeftColumn,
  SplitGridRightColumn,
  CenterContent
} from 'views/layout'
import { H1, P, Button, Logo } from 'components/styled'

import bgImg from 'images/bg_topright.svg'
import heroImg from 'images/silhouettes.svg'
import logo from 'images/mtn_logo.svg'

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
`

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  right: 0;
  align-self: flex-end;
`

const HeroImg = styled(Img)`
  z-index: 1000;
  transform: translateX(-15rem);
`

const Paragraph = styled(P)`
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  line-height: 1.8;
`

const PaddedContent = styled(CenterContent)`
  padding: 10rem;
  transform: translateX(10rem);
  text-align: left;
  align-items: start;
`

class Welcome extends Component {
  nextPage = () => {
    navigate('/preonboarding/info')
  }

  render() {
    const { first_name } = this.props.user
    return (
      <SplitGrid fullPage leftWidth={40} rightWidth={60}>
        <SplitGridLeftColumn background={COLORS.MARIGOLD}>
          <Logo maxWidth="6rem" left="8rem" top="1rem" src={logo} alt="" />

          <PaddedContent>
            <HeroH1>
              Hello, {first_name}!
              <br />
              Welcome aboard
            </HeroH1>
            <Paragraph>
              We are excited to have you join the Y’ello team here at MTN. We
              can’t wait for you to start. We’ve included some helpful
              information and ask that you complete all the required
              documentation, so you can hit the ground running on your first
              day.
            </Paragraph>
            <Button onClick={this.nextPage} fontSize={1.6} color="blue">
              Let's begin your journey >
            </Button>
          </PaddedContent>
        </SplitGridLeftColumn>
        <SplitGridRightColumn background={COLORS.MARIGOLD}>
          <CenterContent>
            <HeroImg src={heroImg} />
          </CenterContent>
          <BgImg src={bgImg} />
        </SplitGridRightColumn>
      </SplitGrid>
    )
  }
}
Welcome.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string
  })
}
export default connect(state => ({
  user: state.user
}))(Welcome)
